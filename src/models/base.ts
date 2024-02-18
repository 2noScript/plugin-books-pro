import { Browser } from "puppeteer";
import { browser } from "../utils";
import {
  IChapter,
  IGenre,
  IComic,
  IResponseChapter,
  IResponseDetailComic,
  IResponseListComic,
} from "./types";

// const defaultResponseListComic: responseListComic = {
//   totalData: 0,
//   canNext: false,
//   canPrev: false,
//   totalPage: 0,
//   currentPage: 0,
//   data: [],
// };

// const defaultResponseDetailComic: responseDetailComic = {
//   path: "",
//   url: "",
//   author: [],
//   name: "",
//   status: null,
//   genres: [],
//   views: "",
//   rate: "",
//   rate_number: "",
//   follows: "",
//   chapters: [],
// };
// const defaultResponseChapter: responseChapter = {
//   url: "",
//   path: "",
//   title: "",
//   chapter_data: [],
//   chap_name: "",
// };

export abstract class BaseComic {
  protected baseUrl: string;
  protected browser: Promise<Browser>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.browser = browser;
  }

  abstract getAllGenres(): Promise<IGenre[]>;
  abstract search(keyword: string, page?: number): Promise<IResponseListComic>;

  abstract getListLatestUpdate(page?: number): Promise<IResponseListComic>;
  abstract getListComplete(page?: number): Promise<IResponseListComic>;
  abstract getListNew(page?: number): Promise<IResponseListComic>;
  abstract getTopHot(): Promise<IResponseListComic>; // limit 15
  abstract getTopWeek(): Promise<IResponseListComic>; // limit 15

  abstract getListByGenre(
    genre: IGenre,
    page?: number
  ): Promise<IResponseListComic>;

  abstract getDetailComic(comic: IComic): Promise<IResponseDetailComic>;
  abstract getDataChapter(itemChap: IChapter): Promise<IResponseChapter>;
}
