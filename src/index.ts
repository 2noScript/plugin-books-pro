import { AbstractComicFactory } from "./models/base";
import { FLAG_COMIC } from "./models/types";

import { NeTruyen, TruyenQQ } from "./plugin";

class Comic {
  private _flag: FLAG_COMIC;
  private _baseUrl: string;
  constructor(flag: FLAG_COMIC, baseUrl: string) {
    this._flag = flag;
    this._baseUrl = baseUrl;
  }
  load() {
    switch (this._flag) {
      case "NETTRUYEN":
        return new NeTruyen(this._baseUrl);
      case "TRUYENQQ":
        return new TruyenQQ(this._baseUrl);
    }
  }
}
