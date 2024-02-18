import { Comic, Suppliers } from "../src";

const truyenqq = new Comic().build(
  Suppliers.TruyenQQ,
  "https://truyenqqvn.com"
);

truyenqq.getAllGenres().then((data) => console.log(data));
