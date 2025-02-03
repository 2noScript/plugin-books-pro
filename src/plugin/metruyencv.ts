import { Page } from "playwright"
import { BaseBook } from "../models/base"
import { IResponseListBook } from "../models/types"

export default class Metruyencv extends BaseBook {
 
    private async passLogin(page: Page) {
        await page.setExtraHTTPHeaders({
            "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)"
        })
    }

    private async getInfoABook(page: Page, url: string) {
        await page.goto(url, { waitUntil: "domcontentloaded" })
    }

    async getTopDay(page: Page): Promise<IResponseListBook> {
        return this.EmptyIResponseListBook("New")
    }

    async getTopWeek(page: Page): Promise<IResponseListBook> {
        return this.EmptyIResponseListBook("New")
    }

    async getTopMonth(page: Page): Promise<IResponseListBook> {
        return this.EmptyIResponseListBook("New")
    }

    async getNew(page: Page): Promise<IResponseListBook> {
        const result: IResponseListBook = {
            dataType: "New",
            data: [],
            status: "SUCCESS",
        }

        await this.passLogin(page)
        await page.goto(this.baseUrl + "/danh-sach/truyen-moi", { waitUntil: "domcontentloaded" })

        let x = 0
        // while (result.data.length < this.LIMIT_ITEMS && x < this.LIMIT_ITEMS) {
        //     await page.waitForSelector('main a[data-x-bind\\:href="getBookUrl(book)"]', { state: "visible" })

        //     const hrefList = await page.locator('main a[data-x-bind\\:href="getBookUrl(book)"]').evaluateAll(links =>
        //         Array.from(new Set(links.map(link => (link as HTMLAnchorElement).href)))
        //     )

        //     console.log(hrefList)

        //     x += hrefList.length

        //     const nextButton = page.locator("button[data-x-bind='NextPage']").first()
        //     if (await nextButton.isVisible()) {
        //         await nextButton.click()
        //     } else {
        //         break // Dừng nếu không có nút next
        //     }
        // }

        await this.useSleep(30)
        return this.EmptyIResponseListBook("New")
    }

    async getFavorite(page: Page): Promise<IResponseListBook> {
        return this.EmptyIResponseListBook("New")
    }
}
