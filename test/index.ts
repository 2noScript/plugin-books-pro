import { BrowserWorker, Page } from "t2-browser-worker"

const br = new BrowserWorker()

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms * 1000))
}

br.runTask(
    async (page: Page) => {
        try {
            // await page.setViewportSize({ width: 1280, height: 720 })
            await page.goto("https://manhuarock1.com")
            await page.waitForTimeout(6000)

      
        } catch {
            console.log("err")
        }

        await sleep(60)
    },
    {
        headless: false,
    }
)
