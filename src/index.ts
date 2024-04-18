import { comicSuppliers } from "./constants/suppliers";
import { IComicInfo, Suppliers } from "./models/types";
import { NetTruyen, TruyenQQ } from "./plugin";
import { SuperBrowser } from "./utils/superBrowser";

export class Comic {
  constructor() {}
  build(supplier: Suppliers, baseUrl: string) {
    const comicInfo: IComicInfo = this.getComicInfoBySupplier(
      supplier,
      baseUrl
    );
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

  public async kill() {
    SuperBrowser.killProcess();
  }
}

export { Suppliers } from "./models/types";
