import { getHtmlParser } from "./utils";

// getHtmlParser("https://truyenqqvn.com/").then((e) => console.log(e));
getHtmlParser("https://www.nettruyenss.com").then((e) =>
  console.log(e.innerHTML)
);
