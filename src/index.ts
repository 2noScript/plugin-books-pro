import { comicSuppliers } from "./constants/suppliers";
import { IComicInfo, Suppliers } from "./models/types";
import { NetTruyen, TruyenQQ } from "./plugin";

export class Comic {
  constructor() {}
  build(supplier: Suppliers, baseUrl: string) {
    const comicInfo = this.getComicInfoBySupplier(supplier, baseUrl);
    switch (supplier) {
      case Suppliers.NetTuyen:
        return new NetTruyen(comicInfo);
      case Suppliers.TruyenQQ:
        return new TruyenQQ(comicInfo);
    }
  }

  private getComicInfoBySupplier = (supplier: Suppliers, baseUrl: string) => {
    const comicInfo = comicSuppliers.find((item) => item.key === supplier);
    return {
      ...comicInfo,
      source: baseUrl,
    } as IComicInfo;
  };
}

export { Suppliers } from "./models/types";
