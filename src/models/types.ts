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

export type suppliers = {
  [key: string]: supplier;
};
