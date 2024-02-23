import { Browser, Page } from "puppeteer";
import { puppeteerCustom } from "../utils";
import {
  IChapter,
  IGenre,
  IComic,
  IResponseChapter,
  IResponseDetailComic,
  IResponseListComic,
  IComicInfo,
} from "./types";
import parse from "node-html-parser";

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
  public comicInfo: IComicInfo;
  protected browser: Promise<Browser>;

  constructor(comicInfo: IComicInfo) {
    this.baseUrl = comicInfo.source;
    this.comicInfo = comicInfo;
    this.browser = puppeteerCustom.launch({ headless: true });
  }

  protected async getRoot(page: Page) {
    return parse(await page.content());
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
