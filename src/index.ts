import { Suppliers } from "./models/types";
import { NetTruyen, TruyenQQ } from "./plugin";
import { getComicInfoBySupplier } from "./utils";

export class Comic {
  constructor() {}
  build(supplier: Suppliers, baseUrl: string) {
    const comicInfo = getComicInfoBySupplier(supplier, baseUrl);
    switch (supplier) {
      case Suppliers.NetTuyen:
        return new NetTruyen(comicInfo);
      case Suppliers.TruyenQQ:
        return new TruyenQQ(comicInfo);
    }
  }
}

export { Suppliers } from "./models/types";
