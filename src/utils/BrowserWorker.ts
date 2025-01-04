import puppeteer from "puppeteer-extra"
import StealthPlugin from "puppeteer-extra-plugin-stealth"
import randomUserAgent from "./puppeteer-plugin"
import { Browser, Page, LaunchOptions } from "puppeteer"

puppeteer.use(StealthPlugin())
puppeteer.use(randomUserAgent())

export type callbackPageHandle = (page: Page) => Promise<void>

export class BrowserWorker {
    private static instance: Browser
    private launchOptions: LaunchOptions
    constructor(launchOptions: LaunchOptions) {
        this.launchOptions = launchOptions
        this.initBrowser()
    }

    public async runTask(callback: callbackPageHandle) {
        const context = await BrowserWorker.instance.createBrowserContext()
        const page = await context.newPage()
        page.setDefaultNavigationTimeout(600000)
        const result = await callback(page)
        await page.close()
        await context.close()
        return result
    }

    private async initBrowser() {
        BrowserWorker.instance = await puppeteer.launch(this.launchOptions)
    }

    public async change(launchOptions: LaunchOptions) {
        BrowserWorker.instance?.close()
        this.launchOptions = launchOptions
        await this.initBrowser()
    }

    public static async kill() {
        if (BrowserWorker.instance) {
            await BrowserWorker.instance.close()
        }
    }
}
