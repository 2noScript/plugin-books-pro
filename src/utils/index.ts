import { DEFAULT_INTERCEPT_RESOLUTION_PRIORITY } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import AnonymizeUaPlugin from "puppeteer-extra-plugin-anonymize-ua";
import RecaptchaPlugin from "puppeteer-extra-plugin-recaptcha";
import AdblockerPlugin from "puppeteer-extra-plugin-adblocker";

import { parse } from "node-html-parser";
import { IComicInfo, Suppliers } from "../models/types";
import { comicSuppliers } from "../constants/suppliers";
puppeteer.use(StealthPlugin());
puppeteer.use(AnonymizeUaPlugin());
puppeteer.use(RecaptchaPlugin());
puppeteer.use(
  AdblockerPlugin({
    interceptResolutionPriority: DEFAULT_INTERCEPT_RESOLUTION_PRIORITY,
  })
);
async function sleep(s: number) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

interface IOptionsHtmlParser {
  sleep?: number;
  reloadCount?: number;
}

export const getHtmlParser = async (
  baseUrl: string,
  options?: IOptionsHtmlParser
) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(baseUrl, { waitUntil: "load" });
    await sleep(options?.sleep ?? 0);
    for (let i = 0; i < (options?.reloadCount ?? 0); i++) {
      await page.reload();
    }
    const htmlContent = await page.content();
    const root = parse(htmlContent);
    await page.close();
    await browser.close();
    return root;
  } catch (error) {
    throw error;
  }
};

export const puppeteerCustom = puppeteer;

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
