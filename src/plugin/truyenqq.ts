import { BaseComic } from "../models/base";
import {
  IGenre,
  IResponseListComic,
  IComic,
  IResponseDetailComic,
  IChapter,
  IResponseChapter,
} from "../models/types";
import { getHtmlParser } from "../utils";
import { textMaster } from "text-master-pro";

export class TruyenQQ extends BaseComic {
  async getAllGenres(): Promise<IGenre[]> {
    const root = await getHtmlParser(this.baseUrl);
    const genresRaw = root
      .querySelectorAll("#header_left_menu li")
      .find(
        (item) =>
          !!textMaster(item.innerText)
            .uses(["removeVietnameseDiacritics", "toLowerCase"])
            .includes("the loai")
      )
      ?.querySelectorAll(".book_tags_content a");
    let all_Genres: IGenre[] = [];
    genresRaw?.forEach((item) => {
      all_Genres.push({
        url: item.getAttribute("href"),
        name: item.innerText.trim(),
        path: item.getAttribute("href")?.replace(this.baseUrl, "") ?? "",
      });
    });
    return all_Genres;
  }
  search(
    keyword: string,
    page?: number | undefined
  ): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getListLatestUpdate(page?: number | undefined): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getListComplete(page?: number | undefined): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getListNew(page?: number | undefined): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getTopHot(): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getTopWeek(): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getListByGenre(
    genre: IGenre,
    page?: number | undefined
  ): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getDetailComic(comic: IComic): Promise<IResponseDetailComic> {
    throw new Error("Method not implemented.");
  }
  getDataChapter(itemChap: IChapter): Promise<IResponseChapter> {
    throw new Error("Method not implemented.");
  }
}
