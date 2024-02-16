import { ComicBase } from "../models/base";
import { genre } from "../models/types";
import genres from "../constants/genres";
export class NeTruyen extends ComicBase {
  getTag(): genre[] {
    return genres.nettruyen;
  }
}
