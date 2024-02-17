import { BaseComic, TGenre } from "../models/base";
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
}
