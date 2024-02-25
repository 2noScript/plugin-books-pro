import { Browser, Page } from "puppeteer";
import { SuperFetch, getBrowser } from "../utils";

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

export abstract class BaseComic {
  protected baseUrl: string;
  public comicInfo: IComicInfo;
  protected browser: Promise<Browser>;
  protected sf: SuperFetch;
  constructor(comicInfo: IComicInfo) {
    this.baseUrl = comicInfo.source;
    this.comicInfo = comicInfo;
    this.browser = getBrowser();
    this.sf = new SuperFetch();
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
