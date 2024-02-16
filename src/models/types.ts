export type genre = {
  url?: string;
  name: string;
  path: string;
};

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
