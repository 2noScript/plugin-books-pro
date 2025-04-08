import { Page, useBlockResource } from "t2-browser-worker"
import { BaseBook } from "../models/base"
import { IResponseListBook, DataType } from "../models/types"

export default class TruyenQQ extends BaseBook {
    private readonly SELECTORS = {
        BOOK_ITEMS: "#main_homepage .list_grid_out li",
        IMAGE: ".book_avatar img",
        NAME: ".book_info .book_name a",
        VIEW: ".book_info .text_detail span:nth-child(1)",
        FOLLOW: ".book_info .text_detail span:nth-child(2)",
        LAST_CHAPTER: ".book_info .last_chapter a",
        TAGS: ".book_info .more-info .list-tags .blue"
    };

    private readonly ROUTES = {
        TOP: "/top-ngay",
        NEW: "/truyen-tranh-moi",
        FAVORITE: "/truyen-yeu-thich"
    };

    private async extractBookData(book: any, index: number): Promise<any> {
        const imageElement = await book.$(this.SELECTORS.IMAGE);
        const nameElement = await book.$(this.SELECTORS.NAME);
        const viewElement = await book.$(this.SELECTORS.VIEW);
        const followElement = await book.$(this.SELECTORS.FOLLOW);
        const lastChapterElement = await book.$(this.SELECTORS.LAST_CHAPTER);
        const tagElements = await book.$$(this.SELECTORS.TAGS);

        const imageUrlThumbnail = await imageElement?.getAttribute("src") || "";
        const name = await nameElement?.getAttribute("title") || "";
        const rawView = await viewElement?.textContent() || "";
        const rawFollow = await followElement?.textContent() || "";
        const rawLastChapter = await lastChapterElement?.textContent() || "";
        const rawTags = await Promise.all(
            tagElements.map((tag: any) => tag.textContent())
        );

        return {
            rank: index + 1,
            identifier: this.getIdentifier(String(name)),
            imageUrlThumbnail: String(imageUrlThumbnail),
            name: String(name),
            view: this.justNumber(String(rawView)),
            follow: this.justNumber(String(rawFollow)),
            lastChapter: this.justNumber(String(rawLastChapter)),
            tags: JSON.stringify(rawTags, null)
        };
    }

    private async subGetBook(
        page: Page,
        dataType: DataType
    ): Promise<IResponseListBook> {
        const result: IResponseListBook = {
            dataType,
            data: [],
            status: "SUCCESS"
        };

        try {
            await page.waitForLoadState("domcontentloaded");
            const bookItems = await page.$$(this.SELECTORS.BOOK_ITEMS);

            for (const [index, book] of bookItems.entries()) {
                if (index === this.LIMIT_ITEMS) break;
                const bookData = await this.extractBookData(book, index);
                result.data.push(bookData);
            }
        } catch (error) {
            console.error(`Error in subGetBook for ${dataType}:`, error);
            result.status = "ERROR";
        }

        return result;
    }

    private async navigateAndFetch(page: Page, route: string, dataType: DataType): Promise<IResponseListBook> {
        await page.goto(`${this.baseUrl}${route}`);
        return this.subGetBook(page, dataType);
    }

    async getTop(page: Page): Promise<IResponseListBook> {
        return this.navigateAndFetch(page, this.ROUTES.TOP, "Top");
    }
    async getNew(page: Page): Promise<IResponseListBook> {
        return this.navigateAndFetch(page, this.ROUTES.NEW, "New");
    }

    async getFavorite(page: Page): Promise<IResponseListBook> {
        return this.navigateAndFetch(page, this.ROUTES.FAVORITE, "Favorite");
    }

    async crawl(page: Page) {
        useBlockResource(page, [
            "image",
            "media",
            "font",
            "script",
            "stylesheet",
            "xhr"
        ]);
        return  super.crawl(page);
    }
}
