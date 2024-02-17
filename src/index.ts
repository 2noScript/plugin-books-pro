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

cm.search("he", 1).then((e) => console.log(e));
