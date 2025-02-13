import { Books, Suppliers } from "../src"
export { saveDataToJson } from "../src/utils"

import { BrowserWorker,Page } from "t2-browser-worker"

const worker = new BrowserWorker()
const book = new Books()

const bk = book.build(Suppliers.Metruyencv, "metruyencv.com")


worker.runTask(async (page:Page)=>{
    const res=await bk.crawl(page)
    console.log(res)
},{
    // blockResource:["image","font","fetch","media","stylesheet","script","websocket","xhr"],
    headless:false
})
