import { Page } from "puppeteer"
import { BaseBook } from "../models/base"
import { IResponseListComic } from "../models/types"

export default class TruyenQQ extends BaseBook {
    getTopDay(page: Page): Promise<IResponseListComic> {
        throw new Error("Method not implemented.")
    }
    getTopWeek(page: Page): Promise<IResponseListComic> {
        throw new Error("Method not implemented.")
    }
    getTopMonth(page: Page): Promise<IResponseListComic> {
        throw new Error("Method not implemented.")
    }
    getNew(page: Page): Promise<IResponseListComic> {
        throw new Error("Method not implemented.")
    }
    getFavorite(page: Page): Promise<IResponseListComic> {
        throw new Error("Method not implemented.")
    }
}
