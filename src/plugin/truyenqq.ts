import { BaseComic } from "../models/base";
import {
  IGenre,
  IResponseListComic,
  IComic,
  IResponseDetailComic,
  IChapter,
  IResponseChapter,
} from "../models/types";
import { Page } from "puppeteer";

export class TruyenQQ extends BaseComic {
  private async getListComic(url: string): Promise<IResponseListComic> {
    let data: IComic[] = [];
    const root = await this.getHtmlParse(url, async (page: Page) => {
      await page.reload();
    });
    const books = root.querySelectorAll("#main_homepage .book_avatar a");
    books.forEach((item) => {
      const name = item.querySelector("img")?.getAttribute("alt") ?? "";
      data.push({
        _bookId: this.generateId(this.cleanText(name)),
        imageThumbnail: item.querySelector("img")?.getAttribute("src") ?? "",
        name,
        path: this.getPath(item?.getAttribute("href")),
      });
    });

    const allPage = root.querySelectorAll("#main_homepage .page_redirect a");
    const canPrev = !!this._.cloneDeep(allPage)
      .shift()
      ?.querySelector('span[aria-hidden="true"]');

    const canNext = !!this._.cloneDeep(allPage)
      .pop()
      ?.querySelector('span[aria-hidden="true"]');
    const totalPage = new URL(
      this._.cloneDeep(allPage).pop()?.getAttribute("href") ?? ""
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
  private async getTop(path: string): Promise<IResponseListComic> {
    const topData = await this.getListComic(this.baseUrl + path);
    const data = topData.data.slice(0, 15);
    return {
      ...topData,
      canNext: false,
      canPrev: false,
      totalPage: 1,
      totalData: data.length,
      data,
    };
  }
  async getAllGenres(): Promise<IGenre[]> {
    const root = await this.getHtmlParse(this.baseUrl);
    const genresRaw = root
      .querySelectorAll("#header_left_menu li")
      .find((item) => !!this.cleanText(item.innerText).includes("theloai"))
      ?.querySelectorAll(".book_tags_content a");
    let allGenres: IGenre[] = [];
    genresRaw?.forEach((item) => {
      const name = item.innerText.trim();
      allGenres.push({
        _genreId: this.generateId(this.cleanText(name)),
        name,
        path: this.getPath(item.getAttribute("href")),
      });
    });
    return allGenres;
  }
  async search(keyword: string, page = 1): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `/tim-kiem/trang-${page ?? 1}.html?q=${keyword ?? ""}`
    );
  }
  getListLatestUpdate(page?: number | undefined): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `/truyen-moi-cap-nhat/trang-${page ?? 1}.html`
    );
  }
  getListComplete(page?: number | undefined): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `/truyen-hoan-thanh/trang-${page ?? 1}.html?status=2`
    );
  }
  getListNew(page?: number | undefined): Promise<IResponseListComic> {
    return this.getListComic(
      this.baseUrl + `/truyen-tranh-moi/trang-${page ?? 1}.html`
    );
  }
  getTopHot(): Promise<IResponseListComic> {
    return this.getTop("/truyen-yeu-thich.html");
  }
  getTopWeek(): Promise<IResponseListComic> {
    return this.getTop("/top-tuan.html");
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
