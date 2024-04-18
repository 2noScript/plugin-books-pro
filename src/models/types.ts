type TYPE_LANGUAGE = "en" | "vi";
type TYPE_lOCALE = "en_EN" | "vi_VN";

export enum Suppliers {
  NetTuyen = "nettruyen",
  TruyenQQ = "truyenqq",
}

export interface IComicInfo {
  key: Suppliers;
  name: string;
  logo: string;
  icon: string;
  language: TYPE_LANGUAGE[];
  locale: TYPE_lOCALE;
  source: string;
}

export interface IComic {
  _id: number;
  imageThumbnail: string;
  name: string;
  path: string;
}

export interface IResponseListComic {
  totalData: number;
  canNext: boolean;
  canPrev: boolean;
  totalPage?: number;
  currentPage: number;
  data: IComic[];
}

export interface IGenre {
  url?: string;
  name: string;
  path: string;
  _genreId: string;
}

export interface IChapter {
  path: string;
  url: string;
  title: string;
  chapName: string;
  last_update?: string;
  views?: string;
}

export interface IResponseDetailComic {
  path: string;
  url: string;
  author: string[];
  name: string;
  status: "process" | "complete" | null;
  genres: IGenre[];
  views?: string;
  rate?: string;
  rateNumber?: string;
  follows?: string;
  chapters: IChapter[];
}

export interface IImageChapter {
  _id: number;
  srcOrigin: string;
  srcCdn?: string;
  alt: string;
}

export interface IResponseChapter {
  url?: string;
  path?: string;
  title: string;
  chapterData: IImageChapter[];
  chapName: string;
}
