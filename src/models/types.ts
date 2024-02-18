type TYPE_LANGUAGE = "vi" | "en";

export type type_supplier = {
  name: "nettruyen" | "truyenqq";
  logo: string;
  icon: string;
  language: TYPE_LANGUAGE[];
  locale: "vi_VN";
  source: string;
};

export type FLAG_COMIC = "NETTRUYEN" | "TRUYENQQ";
export type type_suppliers = {
  [key in FLAG_COMIC]: type_supplier;
};

export interface IComic {
  _id: number;
  image_thumbnail: string;
  name: string;
  href: string;
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
}

export interface IChapter {
  path: string;
  url: string;
  title: string;
  chap_name: string;
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
  rate_number?: string;
  follows?: string;
  chapters: IChapter[];
}

export interface IImageChapter {
  _id: number;
  src_origin: string;
  src_cdn?: string;
  alt: string;
}

export interface IResponseChapter {
  url?: string;
  path?: string;
  title: string;
  chapter_data: IImageChapter[];
  chap_name: string;
}
