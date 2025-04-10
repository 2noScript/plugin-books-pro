import { Page, useBlockResource } from "t2-browser-worker"
import { BaseBook } from "../models/base"
import { IResponseListBook, DataType } from "../models/types"


class Manhuavn extends BaseBook {
    
    getNew(page: Page): Promise<IResponseListBook> {
        throw new Error("Method not implemented.")
    }
    getFavorite(page: Page): Promise<IResponseListBook> {
        throw new Error("Method not implemented.")
    }
    getTop(page: Page): Promise<IResponseListBook> {
        throw new Error("Method not implemented.")
    }

}