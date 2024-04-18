import { textMaster } from "text-master-pro";
import _ from "lodash";
import {
  IChapter,
  IGenre,
  IComic,
  IResponseChapter,
  IResponseDetailComic,
  IResponseListComic,
  IComicInfo,
} from "./types";
import { SuperBrowser, callbackPageHandle } from "../utils/superBrowser";
import { generateIdentifier } from "../utils";

export abstract class BaseComic {
  public comicInfo: IComicInfo;
  protected baseUrl: string;
  protected textMaster: (txt: string) => any;
  private browser: SuperBrowser;
  protected _: any;
  protected generateIdentifier: (text: string) => string;

  constructor(comicInfo: IComicInfo) {
    this.baseUrl = comicInfo.source;
    this.comicInfo = comicInfo;
    this.textMaster = textMaster;
    this.browser = new SuperBrowser();
    this._ = _;
    this.generateIdentifier = generateIdentifier;
  }

  protected async getHtmlParse(url: string, callback?: callbackPageHandle) {
    return this.browser.getHtmlParser(url, callback);
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
