import { Page } from "puppeteer"
import { BaseBook } from "../models/base"
import { IResponseListBook, DataType } from "../models/types"

export default class Metruyencv extends BaseBook {
 
    private async passLogin(page:Page){
        await page.setUserAgent('Googlebot/2.1 (+http://www.google.com/bot.html)')
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
       
        await this.passLogin(page)
        await page.goto(this.baseUrl + "/danh-sach/truyen-moi")
        await this.useSleep(30)
        return this.EmptyIResponseListBook("New")
    }
    async getFavorite(page: Page): Promise<IResponseListBook> {
        return this.EmptyIResponseListBook("New")
    }
}
