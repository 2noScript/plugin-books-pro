import { type_supplier } from "./models/types";
import { NetTruyen } from "./plugin";

import { comicSuppliers } from "./constants/suppliers";

export class Comic {
  constructor() {}
  build(supplier: type_supplier) {
    switch (supplier.name) {
      case "nettruyen":
        return new NetTruyen(supplier.source);
      // case "truyenqq":
      //   return new TruyenQQ(supplier.source);
      default:
        return new NetTruyen(supplier.source);
    }
  }
}

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

cm.getDetailComic({
  _id: 245511,
  image_thumbnail:
    "//st.nettruyenss.com/data/comics/231/every-time-we-meet-eye-to-eye-i-fall-in-6064.jpg",
  title: "Truyện tranh Every Time We Meet Eye to Eye, I Fall in Love with Her",
  href: "/truyen-tranh/chien-binh-cach-mang-nguoi-cho-con-trinh-104944",
}).then((data) => console.log(data));
