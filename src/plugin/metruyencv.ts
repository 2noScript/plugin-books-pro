import { Page ,usePageFetch,useBlockResource} from "t2-browser-worker"
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




   async getTop(page: Page): Promise<IResponseListBook> {
        const result: IResponseListBook = {
            dataType: "Top",
            data: [],
            status: "SUCCESS",
        }
        return result
        }


    async getNew(page: Page): Promise<IResponseListBook> {
        const result: IResponseListBook = {
            dataType: "New",
            data: [],
            status: "SUCCESS",
        }
        
        const res=await usePageFetch(page,"https://backend.metruyencv.com/api/books?filter[gender]=1&filter[state]=published&include=author,genres,creator&limit=20&page=1&sort=-new_chap_at")
        const re2=await usePageFetch(page,"https://backend.metruyencv.com/api/books?filter[gender]=1&filter[state]=published&include=author,genres,creator&limit=20&page=2&sort=-new_chap_at")

        for(const [index, book] of [...res.data.entries(),...re2.data.entries()]){
            const identifier=this.getIdentifier(book.name)
            const name=book.name
            const rank=index+1
            const view=book.view_count
            const like=book.like_count
            const comment=book.comment_count
            const follow=book.bookmark_count
            const author=book.author?.name
            const tags=book.genres.map((item:any)=>item.name).join(",")
            const imageUrlThumbnail=book.poster.default
            const description=book.synopsis

            result.data.push({
                identifier,
                name,
                rank,
                view,
                like,
                comment,
                follow,
                author,
                tags,
                imageUrlThumbnail,
                description
            })
        
        }
        return result
    }

    async getFavorite(page: Page): Promise<IResponseListBook> {
        return this.EmptyIResponseListBook("New")
    }



    async crawl(page: Page){
        useBlockResource(page, [
            "image",
            "media",
            "font",
            "script",
            "stylesheet",
            "xhr"
        ]);
        await this.passLogin(page)
        return super.crawl(page);
    }
}
