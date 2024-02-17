import { Browser } from "puppeteer";
import { browser } from "../utils";
import {
  chapter,
  genre,
  itemComic,
  responseChapter,
  responseDetailComic,
  responseListComic,
} from "./types";

export interface AbstractComicFactory {
  getAllGenres(): Promise<genre[]>;
  search(keyword: string, page?: number): Promise<responseListComic>;

  getListLatestUpdate(page?: number): Promise<responseListComic>;
  getListComplete(page?: number): Promise<responseListComic>;
  getListNew(page?: number): Promise<responseListComic>;

  getListByGenre(genre: genre, page?: number): Promise<responseListComic>;

  getDetailComic(comic: itemComic): Promise<responseDetailComic>;

  getDataChapter(itemChap: chapter): Promise<responseChapter>;
}

const defaultResponseListComic: responseListComic = {
  totalData: 0,
  canNext: false,
  canPrev: false,
  totalPage: 0,
  currentPage: 0,
  data: [],
};

const defaultResponseDetailComic: responseDetailComic = {
  path: "",
  url: "",
  author: [],
  name: "",
  status: null,
  genres: [],
  views: "",
  rate: "",
  rate_number: "",
  follows: "",
  chapters: [],
};
const defaultResponseChapter: responseChapter = {
  url: "",
  path: "",
  title: "",
  chapter_data: [],
  chap_name: "",
};

export class BaseComic implements AbstractComicFactory {
  protected baseUrl: string;
  protected browser: Promise<Browser>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.browser = browser;
  }
  async getAllGenres(): Promise<genre[]> {
    return [];
  }
  async search(keyword: string, page = 1): Promise<responseListComic> {
    return defaultResponseListComic;
  }

  async getListLatestUpdate(page?: number): Promise<responseListComic> {
    return defaultResponseListComic;
  }
  async getListComplete(page?: number): Promise<responseListComic> {
    return defaultResponseListComic;
  }
  async getListNew(page?: number): Promise<responseListComic> {
    return defaultResponseListComic;
  }

  async getListByGenre(
    genre: genre,
    page?: number
  ): Promise<responseListComic> {
    return defaultResponseListComic;
  }
  async getDetailComic(comic: itemComic): Promise<responseDetailComic> {
    return defaultResponseDetailComic;
  }

  async getDataChapter(itemChap: chapter): Promise<responseChapter> {
    return defaultResponseChapter;
  }
}
