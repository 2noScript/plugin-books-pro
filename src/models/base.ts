import { Browser } from "puppeteer";
import { browser } from "../utils";

export type responseListComic = {
  totalData: number;
  canNext: boolean;
  canPrev: boolean;
  totalPage?: number;
  currentPage: number;
  data: {
    _id: number;
    image_thumbnail: string;
    title: string;
    href: string;
  }[];
};

export type TGenre = {
  url?: string;
  name: string;
  path: string;
};

export type chapter = {
  path: string;
  url: string;
  parent_href: string;
  title?: string;
  last_update?: string;
  views?: string;
};

export type responseDetailComic = {
  path: string;
  url: string;
  author: string;
  title: string;
  status: string;
  genres: TGenre[];
  views?: string;
  rate?: string;
  rate_number?: string;
  follows?: string;
  chapters: chapter[];
};

export type image_chapter = {
  _id: number;
  src_origin: string;
  src_cdn?: string;
  alt: string;
};

export type responseChapter = {
  url?: string;
  path?: string;
  title: string;
  chapter_data: image_chapter[];
  prev_chapter: chapter | null;
  next_chapter: chapter | null;
};

export type constructorParams = {
  baseUrl?: string;
};

export interface AbstractComicFactory {
  baseUrl: string;
  browser?: Promise<Browser>;

  getListLatestUpdate(page?: number): Promise<responseListComic>;

  getDetailComic(url: string): Promise<responseDetailComic>;

  getDataChapter(
    url_chapter: string,
    url?: string,
    path?: string,
    prev_chapter?: chapter,
    next_chapter?: chapter
  ): Promise<responseChapter>;

  getListByGenre(
    genre: TGenre,
    page?: number,
    status?: any,
    sort?: any
  ): Promise<responseListComic>;

  getAllGenres(): Promise<TGenre[]>;

  search(keyword: string, page?: number): Promise<responseListComic>;
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
  author: "",
  title: "",
  status: "",
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
  prev_chapter: null,
  next_chapter: null,
};

export class BaseComic implements AbstractComicFactory {
  baseUrl: string;
  browser: Promise<Browser>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.browser = browser;
  }

  async search(keyword: string, page = 1): Promise<responseListComic> {
    return defaultResponseListComic;
  }

  async getListLatestUpdate(page?: number): Promise<responseListComic> {
    return defaultResponseListComic;
  }

  async getDetailComic(url: string): Promise<responseDetailComic> {
    return defaultResponseDetailComic;
  }

  async getDataChapter(
    url_chapter: string,
    url?: string,
    path?: string,
    prev_chapter?: chapter,
    next_chapter?: chapter
  ): Promise<responseChapter> {
    return defaultResponseChapter;
  }

  async getListByGenre(
    genre: TGenre,
    page?: number,
    status?: any,
    sort?: any
  ): Promise<responseListComic> {
    return defaultResponseListComic;
  }
  async getAllGenres(): Promise<TGenre[]> {
    return [];
  }
}
