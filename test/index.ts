import { Comic } from "../src";
import { comicSuppliers } from "../src/constants/suppliers";

const cm = new Comic().build(comicSuppliers.NETTRUYEN);

// cm.search("he", 1);

// cm.getAllGenres().then((data) => console.log(data));
// cm.getListNew(1).then((data) => console.log(data));

// cm.getListByGenre(
//   {
//     name: "Soft Yuri",
//     path: "/tim-truyen/soft-yuri",
//     url: "https://www.nettruyenss.com/tim-truyen/soft-yuri",
//   },
//   2
// ).then((data) => console.log(data));

// cm.getDetailComic({
//   _id: 245511,
//   image_thumbnail:
//     "//st.nettruyenss.com/data/comics/231/every-time-we-meet-eye-to-eye-i-fall-in-6064.jpg",
//   name: "Truyện tranh Every Time We Meet Eye to Eye, I Fall in Love with Her",
//   href: "/truyen-tranh/chien-binh-cach-mang-nguoi-cho-con-trinh-104944",
// }).then((data) => console.log(data));

// cm.getDataChapter({
//   path: "/truyen-tranh/chien-binh-cach-mang-nguoi-cho-con-trinh/chap-1/1113759",
//   url: "https://www.nettruyenss.com/truyen-tranh/chien-binh-cach-mang-nguoi-cho-con-trinh/chap-1/1113759",
//   title: "",
//   chap_name: "1",
// }).then((data) => console.log(data));

cm.getTopHot().then((data) => console.log(data));
