import { Page, usePageFetch, useBlockResource } from "t2-browser-worker"
import { BaseBook } from "../models/base"
import { DataType, IResponseListBook } from "../models/types"

export default class Metruyencv extends BaseBook {
    private readonly API_ENDPOINTS = {
        RANKING: (month: number, year: number, type: 'view' | 'vote') => 
            `https://backend.${this.domain}/api/books/ranking?gender=1&kind=1&limit=${this.LIMIT_ITEMS}&month=${month}&page=1&type=${type}&year=${year}`,
        NEW: `https://backend.${this.domain}/api/books?filter[gender]=1&filter[state]=published&include=author,genres,creator&limit=${this.LIMIT_ITEMS}&page=1&sort=-new_chap_at`
    };

    private getCurrentDate() {
        const date = new Date();
        return {
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    }

    private async passLogin(page: Page) {
        await page.setExtraHTTPHeaders({
            "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
        });
        await page.goto(this.baseUrl, { waitUntil: "domcontentloaded" });
    }

    private transformBookData(book: any, index: number) {
        const bookData = book.book || book;
        return {
            rank: index + 1,
            identifier: this.getIdentifier(bookData.name),
            name: bookData.name,
            view: bookData.view_count,
            like: bookData.like_count,
            comment: bookData.comment_count,
            follow: bookData.bookmark_count,
            author: bookData.author?.name,
            tags: bookData.genres.map((item: any) => item.name).join(","),
            imageUrlThumbnail: bookData.poster.default,
            description: bookData.synopsis,
        };
    }

    private async getInfoABook(page: Page, url: string, dataType: DataType): Promise<IResponseListBook> {
        const result: IResponseListBook = {
            dataType,
            data: [],
            status: "SUCCESS",
        };

        try {
            const res = await usePageFetch(page, url);
            result.data = res.data.map((book: any, index: number) => 
                this.transformBookData(book, index)
            );
        } catch (error) {
            console.error(`Error fetching ${dataType}:`, error);
            result.status = "ERROR";
        }

        return result;
    }

    async getTop(page: Page): Promise<IResponseListBook> {
        const { month, year } = this.getCurrentDate();
        return this.getInfoABook(
            page,
            this.API_ENDPOINTS.RANKING(month, year, 'view'),
            "Top"
        );
    }

    async getNew(page: Page): Promise<IResponseListBook> {
        return this.getInfoABook(
            page,
            this.API_ENDPOINTS.NEW,
            "New"
        );
    }

    async getFavorite(page: Page): Promise<IResponseListBook> {
        const { month, year } = this.getCurrentDate();
        return this.getInfoABook(
            page,
            this.API_ENDPOINTS.RANKING(month, year, 'vote'),
            "Favorite"
        );
    }

    async crawl(page: Page) {
        useBlockResource(page, [
            "image",
            "media",
            "font",
            "script",
            "stylesheet",
        ]);
        await this.passLogin(page);
        return super.crawl(page);
    }
}
