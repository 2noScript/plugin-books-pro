import { Page ,ElementHandle} from "puppeteer"
import { BaseBook } from "../models/base"
import { IResponseListBook, DataType } from "../models/types"

export default class Metruyencv extends BaseBook {
 
    private async passLogin(page:Page){
        await page.setUserAgent('Googlebot/2.1 (+http://www.google.com/bot.html)')
    }


    private async getInfoABook(page:Page,url:string){
       await page.goto(url)

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
            dataType:'New',
            data: [],
            status: "SUCCESS",
        }
        await this.passLogin(page)
        await page.goto(this.baseUrl + "/danh-sach/truyen-moi")
        let x=0
        while(result.data.length<this.LIMIT_ITEMS&&x<this.LIMIT_ITEMS){
            await page.waitForSelector('main a[data-x-bind\\:href="getBookUrl(book)"]', { visible: true });
            const hrefList = await page.$$eval('main a[data-x-bind\\:href="getBookUrl(book)"]', (links) => {
                return links.map(link => link.href); 
            });
            console.log(Array.from(new Set(hrefList)))
            x+=Array.from(new Set(hrefList)).length
            await page.click("button[data-x-bind=\"NextPage\"]")
            
        }


    
          

        await this.useSleep(30)
        return this.EmptyIResponseListBook("New")
    }
    async getFavorite(page: Page): Promise<IResponseListBook> {
        return this.EmptyIResponseListBook("New")
    }
}
