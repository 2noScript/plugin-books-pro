import {  Books,Suppliers } from "../src";
export { saveDataToJson } from "../src/utils";
import BrowserWorker from "browser-worker"



const worker=new BrowserWorker()
const  book = new Books();

const bk = book.build(
  Suppliers.TruyenQQ,
  "truyenqqto.com"
);


worker.runTask(bk.getTopDay.bind(bk)).then(res=>{
  console.log(res)
})


