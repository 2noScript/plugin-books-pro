import { BrowserWorker, BrPage } from "t2-browser-worker"

const br = new BrowserWorker()

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms*1000));
  }
  

br.runTask(
    async (page: BrPage) => {
        await page.goto("https://manhuarock1.com")
        await sleep(2)

        // const iframeElement = await page.$(
        //     "iframe[title='Widget containing a Cloudflare security challenge']"
        // )
        // if (!iframeElement) throw new Error("⚠️ Không tìm thấy iframe!")

        // const captcha_frame = await iframeElement.contentFrame()
        // if (!captcha_frame)
        //     throw new Error("⚠️ Không thể lấy nội dung của iframe!")

        // const checkbox = await captcha_frame.$("input[type='checkbox']")
        // if (!checkbox)
        //     throw new Error("⚠️ Không tìm thấy checkbox trong iframe!")

        // await checkbox.click()
        // console.log("✅ Đã click vào checkbox!")
        await page.locator("label.cb-lb").click();


        await sleep(60)
        
    },
    {
        headless: false,
    }
)
