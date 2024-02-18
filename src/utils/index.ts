import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import AnonymizeUaPlugin from "puppeteer-extra-plugin-anonymize-ua";
import { parse } from "node-html-parser";
import { IComicInfo, Suppliers } from "../models/types";
import { comicSuppliers } from "../constants/suppliers";
puppeteer.use(StealthPlugin());
puppeteer.use(AnonymizeUaPlugin());
async function sleep(s: number) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

export const getHtmlParser = async (baseUrl: string, _sleep: number = 0) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(baseUrl, { waitUntil: "load" });
    const htmlContent = await page.content();
    await sleep(_sleep);
    const root = parse(htmlContent);
    await page.close();
    await browser.close();
    return root;
  } catch (error) {
    throw error;
  }
};

export const browser = puppeteer.launch({ headless: true });

export const getComicInfoBySupplier = (
  supplier: Suppliers,
  baseUrl: string
) => {
  const comicInfo = comicSuppliers.find((item) => item.key === supplier);
  return {
    ...comicInfo,
    source: baseUrl,
  } as IComicInfo;
};
