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


    private async pageResApi(page: Page, url: string) {
        const response = await page.context().request.fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json(); 
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
        
        const res=await this.pageResApi(page,"https://backend.metruyencv.com/api/books?filter[gender]=1&filter[state]=published&include=author,genres,creator&limit=20&page=1&sort=-new_chap_at")
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
