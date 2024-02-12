import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { parse } from "node-html-parser";
puppeteer.use(StealthPlugin());

export const getHtmlParser = async (baseUrl: string) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(baseUrl);
    const htmlContent = await page.content();
    const root = parse(htmlContent);
    browser.close();
    return root;
  } catch (error) {
    throw error;
  }
};
