export type genre = {
  url?: string;
  name: string;
  path: string;
};

type TYPE_LANGUAGE = "vi" | "en";

export type supplier = {
  name: string;
  logo: string;
  icon: string;
  language: TYPE_LANGUAGE[];
  locale: "vi_VN";
};

export type FLAG_COMIC = "NETTRUYEN" | "TRUYENQQ";
export type suppliers = {
  [key in FLAG_COMIC]: supplier;
};

// export type TYPE_LOAD_COMIC={
//   [key in FLAG_COMIC]:
// }
