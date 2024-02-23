import _ from "lodash";

import { BaseComic } from "../models/base";
import {
  IGenre,
  IResponseListComic,
  IComic,
  IResponseDetailComic,
  IChapter,
  IResponseChapter,
} from "../models/types";
import { getHtmlParser } from "../utils";
import { textMaster } from "text-master-pro";

const { cloneDeep } = _;
export class TruyenQQ extends BaseComic {
  private async getListComic(url: string): Promise<IResponseListComic> {
    let data: IComic[] = [];
    const page = await (await this.browser).newPage();
    await page.goto(url);
    await page.reload();
    const root = await this.getRoot(page);
    await page.close();
    const books = root.querySelectorAll("#main_homepage .book_avatar a");
    books.forEach((item) => {
      data.push({
        _id: Number(item?.getAttribute("href")?.split("-")?.pop()),
        image_thumbnail: item.querySelector("img")?.getAttribute("src") ?? "",
        name: item.querySelector("img")?.getAttribute("alt") ?? "",
        href: item?.getAttribute("href")?.replace(this.baseUrl, "") ?? "",
      });
    });

    const allPage = root.querySelectorAll("#main_homepage .page_redirect a");

    const canPrev = !!cloneDeep(allPage)
      .shift()
      ?.querySelector('span[aria-hidden="true"]');

    const canNext = !!cloneDeep(allPage)
      .pop()
      ?.querySelector('span[aria-hidden="true"]');
    const totalPage = new URL(
      cloneDeep(allPage).pop()?.getAttribute("href") ?? ""
    ).pathname
      ?.split("/")
      ?.pop()
      ?.replace(/\D/g, "");

    return {
      totalData: data.length,
      canNext,
      canPrev,
      totalPage: Number(totalPage),
      currentPage: Number(new URL(url).searchParams.get("page") ?? 1),
      data,
    };
  }
  async getAllGenres(): Promise<IGenre[]> {
    const page = await (await this.browser).newPage();
    await page.goto(this.baseUrl);
    await page.reload();
    const root = await this.getRoot(page);
    await page.close();
    const genresRaw = root
      .querySelectorAll("#header_left_menu li")
      .find(
        (item) =>
          !!textMaster(item.innerText)
            .uses(["removeVietnameseDiacritics", "toLowerCase", "removeSpace"])
            .includes("theloai")
      )
      ?.querySelectorAll(".book_tags_content a");
    let all_Genres: IGenre[] = [];
    genresRaw?.forEach((item) => {
      all_Genres.push({
        url: item.getAttribute("href"),
        name: item.innerText.trim(),
        path: item.getAttribute("href")?.replace(this.baseUrl, "") ?? "",
      });
    });
    return all_Genres;
  }
  async search(keyword: string, page = 1): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `/tim-kiem/trang-${page ?? 1}.html?q=${keyword ?? ""}`
    );
  }
  getListLatestUpdate(page?: number | undefined): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getListComplete(page?: number | undefined): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getListNew(page?: number | undefined): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getTopHot(): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getTopWeek(): Promise<IResponseListComic> {
    throw new Error("Method not implemented.");
  }
  getListByGenre(genre: IGenre, page = 1): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `${genre.path.replace(".html", "")}/trang-${page}.html`
    );
  }
  getDetailComic(comic: IComic): Promise<IResponseDetailComic> {
    throw new Error("Method not implemented.");
  }
  getDataChapter(itemChap: IChapter): Promise<IResponseChapter> {
    throw new Error("Method not implemented.");
  }
}
