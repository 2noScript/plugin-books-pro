import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import randomUserAgent from "./puppeteer-plugin";
import { Browser, Page, executablePath } from "puppeteer";
import parse from "node-html-parser";

puppeteer.use(StealthPlugin());
puppeteer.use(randomUserAgent());

export type callbackPageHandle = (
  page: Page,
  scroll?: (page: Page, maxScrolls: number) => Promise<void>,
  sleep?: (s: number) => Promise<void>
) => Promise<void>;

export class SuperBrowser {
  private static instance: Browser | null = null;
  constructor() {}

  private async useSleep(s: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
  }

  private async useScroll(page: Page, maxScrolls = 100) {
    let prevHeight = -1; let scrollCount = 0;
    while (scrollCount < maxScrolls) {
      await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
      let newHeight = await page.evaluate("document.body.scrollHeight");
      if (newHeight == prevHeight) {
        break;
      }
      scrollCount += 1;
    }
  }



    if (callback) await callback(page, this.useScroll, this.useSleep);
    const content = await page.content();
    // trick flash get data
    page.close();
    return parse(content);
  }

  public static async killProcess() {
    if (SuperBrowser.instance) {
      await SuperBrowser.instance.close();
      SuperBrowser.instance = null;
    }
  }
}
