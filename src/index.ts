import { type_supplier } from "./models/types";
import { NetTruyen } from "./plugin";

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
