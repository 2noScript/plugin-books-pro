import { Comic, Suppliers } from "../src";
import { SuperFetch } from "../src/utils";

const truyenqq = new Comic().build(
  Suppliers.TruyenQQ,
  "https://truyenqqvn.com"
);

const sf = new SuperFetch();

const nettruyen = new Comic().build(
  Suppliers.NetTuyen,
  "https://www.nettruyenbb.com"
);
// truyenqq.getAllGenres().then((data) => console.log(data));

// truyenqq.search("z").then((data) => console.log(""));

// truyenqq
//   .getListByGenre({
//     url: "https://truyenqqvn.com/the-loai/webtoon-55.html",
//     name: "Webtoon",
//     path: "/the-loai/webtoon-55.html",
//   })
//   .then((data) => console.log(data));

// nettruyen.getListLatestUpdate().then((data) => console.log(data));

// sf.getClient({
//   method: "GET",
//   url: "https://truyenqqvn.com/truyen-tranh/berserk-of-gluttony-4268",
// }).then((res) => console.log(res?.data));

truyenqq.getAllGenres().then((data) => console.log(data));
