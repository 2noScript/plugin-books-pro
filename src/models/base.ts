import { textMaster } from "text-master-pro";
import _ from "lodash";
import {
  IGenre,
  IResponseListComic,
  IComicInfo,
} from "./types";
import { SuperBrowser, callbackPageHandle } from "../utils/superBrowser";
import { generateIdentifier } from "../utils";

export abstract class BaseComic {
  protected baseUrl: string;

  constructor(comicInfo: IComicInfo) {
    this.baseUrl = comicInfo.source;
  }

  abstract getListNew(page?: number): Promise<IResponseListComic>;
  abstract getTopHot(): Promise<IResponseListComic>; // limit 15
  abstract getTopWeek(): Promise<IResponseListComic>; // limit 15
}
