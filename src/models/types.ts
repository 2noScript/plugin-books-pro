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

export type itemComic = {
  _id: number;
  image_thumbnail: string;
  title: string;
  href: string;
};

export type responseListComic = {
  totalData: number;
  canNext: boolean;
  canPrev: boolean;
  totalPage?: number;
  currentPage: number;
  data: itemComic[];
};

export type genre = {
  url?: string;
  name: string;
  path: string;
};

export type chapter = {
  path: string;
  url: string;
  title?: string;
  chap_name: string;
  last_update?: string;
  views?: string;
};

export type responseDetailComic = {
  path: string;
  url: string;
  author: string[];
  title: string;
  status: "process" | "complete" | null;
  genres: genre[];
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
