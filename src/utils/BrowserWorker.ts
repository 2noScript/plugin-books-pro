import puppeteer from "puppeteer-extra"
import StealthPlugin from "puppeteer-extra-plugin-stealth"
import randomUserAgent from "./puppeteer-plugin"
import { Browser, Page, BrowserLaunchArgumentOptions } from "puppeteer"

puppeteer.use(StealthPlugin())
puppeteer.use(randomUserAgent())

export type callbackPageHandle = (page: Page) => Promise<void>

export class BrowserWorker {
    private static instance: Browser
    private launchOptions: BrowserLaunchArgumentOptions
    constructor(launchOptions: BrowserLaunchArgumentOptions) {
        this.launchOptions = launchOptions
    }

    public async runTask(callback: callbackPageHandle) {
        if (!BrowserWorker.instance) await this.initBrowser()
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

    public async change(launchOptions: BrowserLaunchArgumentOptions) {
        BrowserWorker.instance?.close()
        this.launchOptions = launchOptions
        await this.initBrowser()
    }

    public  async kill() {    
         await BrowserWorker.instance?.close() 
        
    }
}
