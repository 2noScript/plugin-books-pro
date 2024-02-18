import { Comic } from "../src";
import { comicSuppliers } from "../src/constants/suppliers";
import fs from "fs";
const nettruyen = new Comic().build(comicSuppliers.NETTRUYEN);

const test = async () => {
  const [
    getAllGenres,
    search,
    getListLatestUpdate,
    getListNew,
    getTopHot,
    getTopWeek,
    getListByGenre,
    getDetailComic,
    getDataChapter,
  ] = await Promise.all([
    nettruyen.getAllGenres(),
    nettruyen.search("he", 1),
    nettruyen.getListLatestUpdate(),
    nettruyen.getListNew(),
    nettruyen.getTopHot(),
    nettruyen.getTopWeek(),
    nettruyen.getListByGenre({
      name: "Soft Yuri",
      path: "/tim-truyen/soft-yuri",
      url: "https://www.nettruyenss.com/tim-truyen/soft-yuri",
    }),
    nettruyen.getDetailComic({
      _id: 245511,
      image_thumbnail:
        "//st.nettruyenss.com/data/comics/231/every-time-we-meet-eye-to-eye-i-fall-in-6064.jpg",
      name: "Truyện tranh Every Time We Meet Eye to Eye, I Fall in Love with Her",
      href: "/truyen-tranh/chien-binh-cach-mang-nguoi-cho-con-trinh-104944",
    }),
    nettruyen.getDataChapter({
      path: "/truyen-tranh/chien-binh-cach-mang-nguoi-cho-con-trinh/chap-1/1113759",
      url: "https://www.nettruyenss.com/truyen-tranh/chien-binh-cach-mang-nguoi-cho-con-trinh/chap-1/1113759",
      title: "",
      chap_name: "1",
    }),
  ]);
  return {
    getAllGenres,
    search,
    getListLatestUpdate,
    getListNew,
    getTopHot,
    getTopWeek,
    getListByGenre,
    getDetailComic,
    getDataChapter,
  };
};

test().then((data) => {
  const jsonData = JSON.stringify(data);
  fs.writeFile("test/nettruyten-test.json", jsonData, (err) => {
    if (err) {
      console.error("write data fail", err);
      return;
    }
    console.log("write data success");
  });
});
