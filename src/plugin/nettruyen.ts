import { BaseComic, TGenre, responseListComic } from "../models/base";
import { getHtmlParser, removeVietnameseAccent } from "../utils";

export class Nettruyen extends BaseComic {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  async getAllGenres(): Promise<TGenre[]> {
    const root = await getHtmlParser(this.baseUrl + "/tim-truyen");
    const genresRaw = root.querySelectorAll(
      "#ctl00_divRight .ModuleContent ul.nav li a"
    );
    let all_Genres: TGenre[] = [];
    genresRaw.forEach((genre) => {
      if (
        !removeVietnameseAccent(genre.innerText)
          .toLowerCase()
          .includes("tat ca the loai")
      ) {
        all_Genres.push({
          name: genre.innerText,
          path: genre.getAttribute("href")?.replace(this.baseUrl, "") ?? "",
          url: genre.getAttribute("href") ?? "",
        });
      }
    });
    return all_Genres;
  }

  async search(keyword: string, page = 1): Promise<responseListComic> {
    const root = await getHtmlParser(
      this.baseUrl + `/tim-truyen?keyword=${keyword}&page=${page}`
    );
    const books = root.querySelectorAll("#ctl00_divCenter .items .item");
    const canPrev = !!root.querySelector(".pagination .prev-page");
    const canNext = !!root.querySelector(".pagination .next-page");
    const totalPage =
      root
        .querySelector(".pagination .hidden")
        ?.innerText?.split("/")
        ?.pop()
        ?.trim() ?? 1;
    let data: any = [];
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
      currentPage: page,
      data,
    };
  }
}
