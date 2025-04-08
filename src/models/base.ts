import { Page } from "t2-browser-worker"
import { DataType, IResponseListBook } from "./types"

export abstract class BaseBook {
    protected baseUrl: string
    protected LIMIT_ITEMS: number = 30
    protected domain: string

    constructor(domain: string) {
        this.domain = domain
        this.baseUrl = `https://${domain}`
    }
    // max 30 items
    abstract getNew(page: Page): Promise<IResponseListBook>
    abstract getFavorite(page: Page): Promise<IResponseListBook>
    abstract getTop(page: Page): Promise<IResponseListBook>
    
    async crawl(page: Page) {
        const bookNew = await this.getNew(page)
        const top=await this.getTop(page)
        const bookFavorite = await this.getFavorite(page)
        return { top, bookNew, bookFavorite }
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

    protected justNumber(str: string) {
        return Number(str.replace(/\D/g, "")) ?? 0
    }

    protected EmptyIResponseListBook(
        dataType: DataType
    ): Promise<IResponseListBook> {
        return Promise.resolve({
            dataType,
            data: [],
            status: "WITHOUT",
        })
    }
}
