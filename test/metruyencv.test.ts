import { Books, Suppliers } from "../src"
export { saveDataToJson } from "../src/utils"

import { BrowserWorker } from "t2-browser-worker"

const worker = new BrowserWorker()
const book = new Books()

const bk = book.build(Suppliers.Metruyencv, "metruyencv.com")

worker.runTask(bk.getNew.bind(bk)).then(res => {
    console.log(res)
})
