import { BaseComic } from "../models/base";
import genres from "../constants/genres";

export class Nettruyen extends BaseComic {
  constructor(baseUrl: string) {
    super(baseUrl);
    this.all_genres = genres.nettruyen;
  }
}
