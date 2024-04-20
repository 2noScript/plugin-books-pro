import { Comic, Suppliers } from "../src";
export { saveDataToJson } from "../src/utils";

export const comic = new Comic();

export const nettruyen = comic.build(
  Suppliers.NetTuyen,
  "https://nettruyenco.vn"
);
export const truyenqq = comic.build(
  Suppliers.TruyenQQ,
  "https://truyenqqvn.com"
);
