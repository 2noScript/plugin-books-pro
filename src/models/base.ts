import { Browser, Page } from "puppeteer";
import {
  IOptionsHtmlParser,
  SuperFetch,
  getBrowser,
  getHtmlParser,
} from "../utils";
import { textMaster } from "text-master-pro";

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
  public comicInfo: IComicInfo;

  protected baseUrl: string;
  protected browser!: Browser;
  protected sf: SuperFetch;
  protected textMaster: (txt: string) => any;

  constructor(comicInfo: IComicInfo) {
    this.baseUrl = comicInfo.source;
    this.comicInfo = comicInfo;
    this.sf = new SuperFetch();
    this.textMaster = textMaster;
  }

  protected async getHtmlParseByPage(page: Page) {
    return parse(await page.content());
  }
  protected async getHtmlParseByUrl(url: string, options?: IOptionsHtmlParser) {
    return getHtmlParser(this.browser, url, options);
  }

  public async initialize() {
    this.browser = await getBrowser();
  }

  public async destroy() {
    if (!!this.browser) {
      await this.browser.close();
    }
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
