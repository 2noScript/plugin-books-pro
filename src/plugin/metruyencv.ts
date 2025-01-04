import { Page } from "puppeteer"
import { BaseBook } from "../models/base"
import { IResponseListBook, DataType } from "../models/types"
import { xorDecrypt } from "../utils"
import { AUTHOR_KEY } from "../constants"

export default class Metruyencv extends BaseBook {
    private emailLogin: string = "RgYOPQQfAkc0VQMOOg9cCh8Z"
    private passwordLogin: string = "AFxfYVFCWUA="
    private isisLoggedIn: boolean = false

    private async logInHelper(page: Page) {
        if (!this.isisLoggedIn) {
            await page.goto(this.baseUrl)
            await page.waitForSelector(
                "button[data-x-bind=\"OpenModal('login')\"]"
            )
            await page.click("button[data-x-bind=\"OpenModal('login')\"]")

            await page.waitForSelector('input[data-x-model="form.email"]')
            await page.type(
                'input[data-x-model="form.email"]',
                xorDecrypt(this.emailLogin, AUTHOR_KEY),
                { delay: 100 }
            )

            await page.waitForSelector('input[data-x-model="form.password"]')
            await page.type(
                'input[data-x-model="form.password"]',
                xorDecrypt(this.passwordLogin, AUTHOR_KEY),
                { delay: 100 }
            )

            await page.click('button[data-x-bind="Submit"]')
            await page.waitForSelector(
                "img[data-x-bind=\"UserAvatar($store.account.userData)\"]"
            )
        }
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
        await this.logInHelper(page)
        await page.goto(this.baseUrl + "/danh-sach/truyen-moi")
        await this.useSleep(30)
        return this.EmptyIResponseListBook("New")
    }
    async getFavorite(page: Page): Promise<IResponseListBook> {
        return this.EmptyIResponseListBook("New")
    }
}
