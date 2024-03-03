import { BaseComic } from "../models/base";
import {
  IChapter,
  IGenre,
  IComic,
  IResponseChapter,
  IResponseDetailComic,
  IResponseListComic,
} from "../models/types";

export class NetTruyen extends BaseComic {
  private async getListComic(url: string): Promise<IResponseListComic> {
    let data: IComic[] = [];
    const root = await this.getHtmlParseByUrl(url);

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
      data.push({
        _id: Number(a?.getAttribute("href")?.split("-")?.pop()),
        image_thumbnail:
          a?.querySelector("img")?.getAttribute("data-original") ??
          a?.querySelector("img")?.getAttribute("src") ??
          "",
        name:
          a?.getAttribute("title") ??
          a?.querySelector("img")?.getAttribute("alt") ??
          "",
        href: a?.getAttribute("href")?.replace(this.baseUrl, "") ?? "",
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
    const root = await this.getHtmlParseByUrl(this.baseUrl + "/tim-truyen");
    const genresRaw = root.querySelectorAll(
      "#ctl00_divRight .ModuleContent ul.nav li a"
    );
    let all_Genres: IGenre[] = [];
    genresRaw.forEach((item) => {
      if (
        !this.textMaster(item.innerText)
          .uses(["removeVietnameseDiacritics", "toLowerCase", "removeSpace"])
          .includes("tatcatheloai")
      ) {
        all_Genres.push({
          name: item.innerText,
          path: item.getAttribute("href")?.replace(this.baseUrl, "") ?? "",
          url: item.getAttribute("href") ?? "",
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
    return this.getListComic(this.baseUrl + `/truyen-full?page=${page}`);
  }
  async getListNew(page = 1): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `/truyen-full?page=${page}&status=-1&sort=15`
    );
  }
  async getTopHot(): Promise<IResponseListComic> {
    const topHotData = await this.getListComic(this.baseUrl + "/hot");
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
    const root = await this.getHtmlParseByUrl(this.baseUrl + comic.href);
    const author =
      root
        .querySelectorAll("#item-detail li.author.row a")
        .map((au) => au.innerText.trim()) ?? [];
    let status: any = this.textMaster(
      root.querySelectorAll("#item-detail li.status.row p").pop()?.innerText ??
        ""
    ).uses(["toLowerCase", "removeVietnameseDiacritics", "removeSpace"]);

    if (status === "dangtienhanh") status = "process";
    else if (status === "hoanthanh") status = "complete";
    else status = null;

    const genres = root
      .querySelectorAll("#item-detail li.kind.row a")
      .map((g) => ({
        name: g.innerText.trim(),
        url: g.getAttribute("href"),
        path: g.getAttribute("href")?.replace(this.baseUrl, ""),
      })) as IGenre[];

    const views = root
      .querySelectorAll("#item-detail .row")
      .find(
        (item) =>
          item.querySelector(".fa.fa-eye") ||
          this.textMaster(item.querySelector("p")?.innerText ?? "").uses([
            "removeVietnameseDiacritics",
            "toLowerCase",
            "removeSpace",
          ]) === "luotxem"
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

    const rate_number = root.querySelector(
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
          url: chap.querySelector("a")?.getAttribute("href"),
          title: chap_text.length > 1 ? chap_text.pop()?.trim() : "",
          chap_name: chap_text[0].toLowerCase().replace("chapter", "").trim(),
        };
      }) as IChapter[];

    return {
      path: comic.href,
      url: this.baseUrl + comic.href,
      author,
      name: comic.name,
      status,
      genres,
      views,
      rate,
      rate_number,
      follows,
      chapters,
    };
  }
  async getDataChapter(itemChap: IChapter): Promise<IResponseChapter> {
    const root = await this.getHtmlParseByUrl(this.baseUrl + itemChap.path);
    const chap_name = root
      .querySelectorAll("#ctl00_divCenter .reading-detail .page-chapter img")
      .map((item) => ({
        _id: Number(item.getAttribute("data-index")),
        src_origin:
          item.getAttribute("data-original") ?? item.getAttribute("src") ?? "",
        src_cdn: item.getAttribute("data-cdn") ?? "",
        alt: item.getAttribute("alt")?.trim() ?? "",
      }));
    return {
      url: itemChap.url,
      path: itemChap.path,
      title: itemChap.title,
      chapter_data: chap_name,
      chap_name: itemChap.chap_name,
    };
  }
}
