import { genre } from "./types";

export interface AbstractComicFactory {}

export class ComicBase {
  _baseUrl: string;
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }
  getTag(): genre[] {
    return [];
  }
}
