import BrowserWorker from "browser-worker"

const br=new BrowserWorker()

br.runTask(async (page:any)=>{
    await page.goto("https://manhuarock1.com")
})