import { BaseComic } from "../models/base";
import {
  IChapter,
  IComic,
  IGenre,
  IResponseChapter,
  IResponseDetailComic,
  IResponseListComic,
} from "../models/types";

export class NetTruyen extends BaseComic {
  private async getListComic(url: string): Promise<IResponseListComic> {
    let data: IComic[] = [];
    const root = await this.getHtmlParse(url);
    const books = root.querySelectorAll("#ctl00_divCenter .items .item");
    const canPrev = !!root.querySelector(".pagination .prev-page");
    const canNext = !!root.querySelector(".pagination .next-page");
    const totalPage =
      root
        .querySelector(".pagination .hidden")
        ?.innerText?.split("/")
        ?.pop()
        ?.trim() ?? 1;

    books.forEach((book) => {
      const a = book.querySelector(".image a");
      const imgAvatar = a?.querySelector("img");
      const name =
        a?.getAttribute("title") ?? imgAvatar?.getAttribute("alt") ?? "";

      data.push({
        _bookId: this.generateId(name),
        imageThumbnail:
          imgAvatar?.getAttribute("data-original") ??
          imgAvatar?.getAttribute("src") ??
          "",
        name,
        path: a?.getAttribute("href")?.replace(this.baseUrl, "") ?? "",
      });
    });

    return {
      totalData: data.length,
      canNext,
      canPrev,
      totalPage: Number(totalPage),
      currentPage: Number(new URL(url).searchParams.get("page") ?? 1),
      data,
    };
  }

  async getAllGenres(): Promise<IGenre[]> {
    const root = await this.getHtmlParse(this.baseUrl + "/tim-truyen");
    const genresRaw = root.querySelectorAll(
      "#ctl00_divRight .ModuleContent ul.nav li a"
    );
    let all_Genres: IGenre[] = [];
    genresRaw.forEach((item) => {
      if (!this.cleanText(item.innerText).includes("tatcatheloai")) {
        const name = item.innerText;
        all_Genres.push({
          _genreId: this.generateId(name),
          name,
          path: item.getAttribute("href")?.replace(this.baseUrl, "") ?? "",
        });
      }
    });
    return all_Genres;
  }

  async search(keyword: string, page = 1): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `/tim-truyen?keyword=${keyword}&page=${page}`
    );
  }

  async getListLatestUpdate(page = 1): Promise<IResponseListComic> {
    return this.getListComic(this.baseUrl + `/tim-truyen?page=${page}`);
  }
  async getListComplete(page = 1): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `/tim-truyen?page=${page}&status=2&sort=15`
    );
  }
  async getListNew(page = 1): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `/tim-truyen?page=${page}&status=-1&sort=15`
    );
  }
  async getTopHot(): Promise<IResponseListComic> {
    const topHotData = await this.getListComic(
      this.baseUrl + "/truyen-tranh-hot"
    );
    const data = topHotData.data.slice(0, 15);
    return {
      ...topHotData,
      canNext: false,
      canPrev: false,
      totalPage: 1,
      totalData: data.length,
      data,
    };
  }

  async getTopWeek(): Promise<IResponseListComic> {
    const topWeekData = await this.getListComic(
      this.baseUrl + "/tim-truyen?status=-1&sort=12"
    );
    const data = topWeekData.data.slice(0, 15);
    return {
      ...topWeekData,
      canNext: false,
      canPrev: false,
      totalPage: 1,
      totalData: data.length,
      data,
    };
  }
  async getListByGenre(genre: IGenre, page = 1): Promise<IResponseListComic> {
    return this.getListComic(this.baseUrl + `${genre.path}?page=${page}`);
  }
  async getDetailComic(comic: IComic): Promise<IResponseDetailComic> {
    const root = await this.getHtmlParse(this.baseUrl + comic.path);
    const author =
      root
        .querySelectorAll("#item-detail li.author.row a")
        .map((au) => au.innerText.trim()) ?? [];
    let status: any = this.cleanText(
      root.querySelectorAll("#item-detail li.status.row p").pop()?.innerText ??
        ""
    );

    if (status === "dangtienhanh") status = "process";
    else if (status === "hoanthanh") status = "complete";
    else status = null;

    const genres = root
      .querySelectorAll("#item-detail li.kind.row a")
      .map((g) => ({
        _genreId: this.generateId(g.innerText),
        name: g.innerText.trim(),
        path: g.getAttribute("href")?.replace(this.baseUrl, ""),
      })) as IGenre[];

    const views = root
      .querySelectorAll("#item-detail .row")
      .find(
        (item) =>
          item.querySelector(".fa.fa-eye") ||
          this.cleanText(item.querySelector("p")?.innerText ?? "") === "luotxem"
      )
      ?.querySelectorAll("p")
      .pop()?.innerText;

    const follows =
      root.querySelector("#item-detail .follow span b")?.innerText ?? "";

    const rate =
      root.querySelector(
        "#item-detail span[itemprop='aggregateRating'] span[itemprop='ratingValue']"
      )?.innerText +
      "/" +
      root.querySelector(
        "#item-detail span[itemprop='aggregateRating'] span[itemprop='bestRating']"
      )?.innerText;

    const rateNumber = root.querySelector(
      "#item-detail span[itemprop='aggregateRating'] span[itemprop='ratingCount']"
    )?.innerText;

    const chapters = root
      .querySelectorAll("#nt_listchapter nav ul li")
      .map((chap) => {
        const chap_text = chap.querySelector("a")?.innerText.split(":") ?? [""];
        return {
          path: chap
            .querySelector("a")
            ?.getAttribute("href")
            ?.replace(this.baseUrl, ""),
          title: chap_text.length > 1 ? chap_text.pop()?.trim() : "",
          chapName: chap_text[0].toLowerCase().replace("chapter", "").trim(),
        };
      }) as IChapter[];

    return {
      path: comic.path,
      author,
      name: comic.name,
      status,
      genres,
      views,
      rate,
      rateNumber,
      follows,
      chapters: this._.reverse(chapters),
    };
  }
  async getDataChapter(itemChap: IChapter): Promise<IResponseChapter> {
    const root = await this.getHtmlParse(this.baseUrl + itemChap.path);
    const chapData = root
      .querySelectorAll("#ctl00_divCenter .reading-detail .page-chapter img")
      .map((item, index) => {
        const src: string[] = [];
        for (let i = 1; i <= 4; i++) {
          const imageSrc = item.getAttribute(`data-sv${i}`);
          if (!imageSrc) break;
          src.push(imageSrc);
        }
        return {
          _index: index + 1,
          src,
        };
      });

    return {
      path: itemChap.path,
      title: itemChap.title,
      chapName: itemChap.chapName,
      chapterData: chapData,
    };
  }
}
