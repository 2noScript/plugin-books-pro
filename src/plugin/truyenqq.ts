import { Page } from "puppeteer"
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

        await page.waitForSelector("#main_homepage .list_grid_out")

        const bookItems = await page.$$("#main_homepage .list_grid_out li")
        try {
            for (const [index, book] of bookItems.entries()) {
                if (index === this.LIMIT_ITEMS) break
                const imageUrlThumbnail = await book.$eval(
                    ".book_avatar img",
                    img => img.getAttribute("src")
                )
                const name = await book.$eval(
                    ".book_info .book_name a",
                    book_name => book_name.getAttribute("title")
                )

                const rawView = await book.$eval(
                    ".book_info .text_detail span:nth-child(1)",
                    span => {
                        return span.textContent
                    }
                )
                const rawFollow = await book.$eval(
                    ".book_info .text_detail span:nth-child(2)",
                    span => {
                        return span.textContent
                    }
                )
                const rawLastChapter = await book.$eval(
                    ".book_info .last_chapter a",
                    a => {
                        return a.textContent
                    }
                )
                const rawTags = await book.$$eval(
                    ".book_info .more-info .list-tags .blue",
                    elements => {
                        return elements.map(el =>
                            el.textContent?.trim()
                        ) as string[]
                    }
                )
                result.data.push({
                    rank: index + 1,
                    identifier: this.getIdentifier(String(name)),
                    imageUrlThumbnail: String(imageUrlThumbnail),
                    name: String(name),
                    view: this.justNumber(String(rawView)),
                    follow: this.justNumber(String(rawFollow)),
                    lastChapter: this.justNumber(String(rawLastChapter)),
                    tags: JSON.stringify(rawTags, null),
                })
            }
        } catch (e) {
            console.error(e)
            result.status = "ERROR"
        }

        return result
    }

    async getTopDay(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + "/top-ngay")
        return this.subGetBook(page, "TopDay")
    }
    async getTopWeek(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + '/top-tuan')
        return this.subGetBook(page,'TopWeek')
    }
    async getTopMonth(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + '/top-thang')
        return this.subGetBook(page,'TopMonth')
    }
    async getNew(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + '/truyen-tranh-moi')
        return this.subGetBook(page,'New')
    }
    async getFavorite(page: Page): Promise<IResponseListBook> {
        await page.goto(this.baseUrl + '/truyen-yeu-thich')
        return this.subGetBook(page,'Favorite')
    }
}
