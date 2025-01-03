import {
  IResponseListComic,
  ISourceInfo,
} from "./types";


import { Page } from "puppeteer";

export abstract class BaseComic {
  protected baseUrl: string;

  constructor(comicInfo: ISourceInfo) {
    this.baseUrl = `https://${comicInfo.domain}`;
  }

  abstract getTopHot(page: Page): Promise<IResponseListComic>; // max 30
  abstract getTopWeek(page: Page): Promise<IResponseListComic>; // max 30
  abstract getTopMonth(page: Page): Promise<IResponseListComic>;
  abstract getNew(page: Page): Promise<IResponseListComic>;
  abstract getFavorite(page: Page): Promise<IResponseListComic>;
}
