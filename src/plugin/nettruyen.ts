import { BaseComic } from "../models/base";
import { genre, responseListComic } from "../models/types";
import { getHtmlParser, removeVietnameseAccent } from "../utils";

export class NetTruyen extends BaseComic {
  private async getListComic(url: string): Promise<responseListComic> {
    let data: any = [];
    const root = await getHtmlParser(url);
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
          a?.querySelector("img")?.getAttribute("src"),
        title:
          a?.getAttribute("title") ??
          a?.querySelector("img")?.getAttribute("alt"),
        href: a?.getAttribute("href")?.replace(this.baseUrl, "") ?? "",
      });
    });
    return {
      totalData: data.length,
      canNext,
      canPrev,
      totalPage: Number(totalPage),
      currentPage: Number(new URLSearchParams(url).get("page") ?? 1),
      data,
    };
  }

  async getAllGenres(): Promise<genre[]> {
    const root = await getHtmlParser(this.baseUrl + "/tim-truyen");
    const genresRaw = root.querySelectorAll(
      "#ctl00_divRight .ModuleContent ul.nav li a"
    );
    let all_Genres: genre[] = [];
    genresRaw.forEach((item) => {
      if (
        !removeVietnameseAccent(item.innerText)
          .toLowerCase()
          .includes("tat ca the loai")
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

  async search(keyword: string, page = 1): Promise<responseListComic> {
    return this.getListComic(
      this.baseUrl + `/tim-truyen?keyword=${keyword}&page=${page}`
    );
  }

  async getListLatestUpdate(page = 1): Promise<responseListComic> {
    return this.getListComic(this.baseUrl + `/tim-truyen?page=${page}`);
  }
  async getListComplete(page = 1): Promise<responseListComic> {
    return this.getListComic(this.baseUrl + `/truyen-full?page=${page}`);
  }
  async getListNew(page = 1): Promise<responseListComic> {
    return this.getListComic(
      this.baseUrl + `/truyen-full?page=${page}&status=-1&sort=15`
    );
  }
}
