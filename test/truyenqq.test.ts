import { Books, Suppliers } from "../src"
import { BrowserWorker,Page } from "t2-browser-worker"

const worker = new BrowserWorker()
const book = new Books()

const bk = book.build(Suppliers.TruyenQQ)

worker.runTask(async (page:Page)=>{
    const res=await bk.crawl(page)
    return res
},{
    headless:true
}).then(res=>{
    console.log(JSON.stringify(res,null,2))
})

