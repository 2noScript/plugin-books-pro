import genres from "../constants/genres";
import { ComicBase } from "../models/base";
import { genre } from "../models/types";
export class TruyenQQ extends ComicBase {
  getTag(): genre[] {
    return genres.truyenqq;
  }
}
