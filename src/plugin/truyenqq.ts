import { Page } from "t2-browser-worker"
import { BaseBook } from "../models/base"
import { IResponseListBook, DataType } from "../models/types"

export default class TruyenQQ extends BaseBook {
    private async subGetBook(
        page: Page,
        dataType: DataType
    ): Promise<IResponseListBook> {
        const result: IResponseListBook = {
            dataType,
            data: [],
            status: "SUCCESS",
        }
        await page.waitForLoadState("domcontentloaded")
        const bookItems = await page.$$("#main_homepage .list_grid_out li");
        try {
            for (const [index, book] of bookItems.entries()) {
                if (index === this.LIMIT_ITEMS) break;
                const imageElement = await book.$(".book_avatar img");
                const nameElement = await book.$(".book_info .book_name a");
                const viewElement = await book.$(".book_info .text_detail span:nth-child(1)");
                const followElement = await book.$(".book_info .text_detail span:nth-child(2)");
                const lastChapterElement = await book.$(".book_info .last_chapter a");
                const tagElements = await book.$$(".book_info .more-info .list-tags .blue");
        
                const imageUrlThumbnail = imageElement ? await imageElement.getAttribute("src") : "";
                const name = nameElement ? await nameElement.getAttribute("title") : "";
                const rawView = viewElement ? await viewElement.textContent() : "";
                const rawFollow = followElement ? await followElement.textContent() : "";
                const rawLastChapter = lastChapterElement ? await lastChapterElement.textContent() : "";
        
                const rawTags = await Promise.all(tagElements.map(async (tag) => {
                    return tag.textContent();
                }));
        
                result.data.push({
                    rank: index + 1,
                    identifier: this.getIdentifier(String(name)),
                    imageUrlThumbnail: String(imageUrlThumbnail),
                    name: String(name),
                    view: this.justNumber(String(rawView)),
                    follow: this.justNumber(String(rawFollow)),
                    lastChapter: this.justNumber(String(rawLastChapter)),
                    tags: JSON.stringify(rawTags, null),
                });
            }
        } catch (e) {
            console.error(e);
            result.status = "ERROR";
        }
        
        return result
    }

    async getTopDay(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + "/top-ngay")
        return this.subGetBook(page, "TopDay")
    }

    async getTopWeek(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + "/top-tuan")
        return this.subGetBook(page, "TopWeek")
    }

    async getTopMonth(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + "/top-thang")
        return this.subGetBook(page, "TopMonth")
    }

    async getNew(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + "/truyen-tranh-moi")
        return this.subGetBook(page, "New")
    }

    async getFavorite(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + "/truyen-yeu-thich")
        return this.subGetBook(page, "Favorite")
    }
}
