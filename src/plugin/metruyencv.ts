import { Page } from "t2-browser-worker"
import { BaseBook } from "../models/base"
import { IResponseListBook } from "../models/types"

export default class Metruyencv extends BaseBook {
    private async passLogin(page: Page) {
        await page.setExtraHTTPHeaders({
            "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
        })
        await page.goto(this.baseUrl,{waitUntil:"domcontentloaded"})
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
        
        const baseURL = "https://backend.metruyencv.com/api/books"
        const params = new URLSearchParams({
            "filter[gender]": String(1), 
            "filter[state]": "published",
            include: "author,genres,creator",
            limit: String(20),
            page: String(1), 
            sort: "-new_chap_at",
        });
        
        const url = `${baseURL}?${params.toString()}`
        console.log(url)
        const res= await page.evaluate((url) => {
            return fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(response => response.json())
            .catch(error => console.error("Fetch error:", error));
        }, url);
        console.log(res)

        await this.useSleep(30)
        return this.EmptyIResponseListBook("New")
    }

    async getFavorite(page: Page): Promise<IResponseListBook> {
        return this.EmptyIResponseListBook("New")
    }



    async crawl(page: Page){
        await this.passLogin(page)
        const result = await super.crawl(page);
        return result
    }
}
