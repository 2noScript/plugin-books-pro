import { Suppliers } from "./models/types";
import { NetTruyen } from "./plugin";
import { getComicInfoBySupplier } from "./utils";

export class Comic {
  constructor() {}
  build(supplier: Suppliers, baseUrl: string) {
    const comicInfo = getComicInfoBySupplier(supplier, baseUrl);
    switch (supplier) {
      case Suppliers.NetTuyen:
        return new NetTruyen(comicInfo);
      // case "truyenqq":
      //   return new TruyenQQ(supplier.source);
      default:
        return new NetTruyen(comicInfo);
    }
  }
}

export { Suppliers } from "./models/types";
