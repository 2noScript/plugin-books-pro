// https://www.nettruyenus.com/

import express from "express";
import request from "../../utils/request.js";
import { parse } from "node-html-parser";

const router = express.Router();

const home = async (host = "https://www.nettruyen.com", page = 1) => {
  const url = host + "/?page=" + page;
  let jsonData = [];
  for (let i = 0; i < 10; i++) {
    const { data, status } = await request({ url });
    if (status === 200) {
      const root = parse(data);
      const books = root.querySelectorAll("#ctl00_divCenter .items .row .item");
      for (const book of books) {
        const a = book.querySelector("figure div.image a");
        const img = book.querySelector("figure div.image img");

        const name = a.getAttribute("title") ?? img.getAttribute("alt");
        const avatar =
          img.getAttribute("data-original") ?? img.getAttribute("src");
        const identifier = a.getAttribute("href").split("/").pop();
        const view = book
          .querySelector('p:contains("Lượt xem:")')
          .text.trim()
          .replace("Lượt xem:", "");
        const latestChapter = book
          .querySelectorAll("ul.comic-item li a")[0]
          ?.text.replace("Chapter", "")
          .trim();
        const latestUpdate = book.querySelectorAll("ul.comic-item li .time")[0]
          ?.text;
        jsonData.push({
          name,
          avatar,
          identifier,
          view,
          latestChapter,
        });
      }
      break;
    }
  }
  return jsonData;
};

router.get("/", (req, res) => {
  res.send("nettruyen");
});
router.get("/home", async (req, res) => {
  const { page, host } = req.query;

  const jsonData = await home("https://www.nettruyen.com", page);
  res.send(jsonData);
});

export default router;
