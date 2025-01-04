import { Page } from "puppeteer"
import { IResponseListBook } from "./types"

export abstract class BaseBook {
    protected baseUrl: string
    protected LIMIT_ITEMS:number=30

    constructor(domain: string) {
        this.baseUrl = `https://${domain}`
    }
    // max 30 items
    abstract getTopDay(page: Page): Promise<IResponseListBook>
    abstract getTopWeek(page: Page): Promise<IResponseListBook>
    abstract getTopMonth(page: Page): Promise<IResponseListBook>
    abstract getNew(page: Page): Promise<IResponseListBook>
    abstract getFavorite(page: Page): Promise<IResponseListBook>

    async crawl(page: Page) {
        const topDay = await this.getTopDay(page)
        const topWeek = await this.getTopWeek(page)
        const topMonth = await this.getTopMonth(page)
        const bookNew = await this.getNew(page)
        const bookFavorite = await this.getFavorite(page)
        return { topDay, topWeek, topMonth, bookNew, bookFavorite }
    }

    protected useSleep(s: number) {
        return new Promise(resolve => setTimeout(resolve, s * 1000))
    }
    protected async useScroll(page: Page, maxScrolls = 100) {
        let prevHeight = -1
        let scrollCount = 0
        while (scrollCount < maxScrolls) {
            await page.evaluate(
                "window.scrollTo(0, document.body.scrollHeight)"
            )
            let newHeight = await page.evaluate("document.body.scrollHeight")
            if (newHeight == prevHeight) {
                break
            }
            scrollCount += 1
        }
    }
    protected getIdentifier(str: string) {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .toUpperCase()
    }
    
    protected justNumber(str: string){
        return Number(str.replace(/\D/g, '')) ?? 0
    }
}
