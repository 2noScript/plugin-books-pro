import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import randomUserAgent from "./puppeteer-plugin";
import { Browser, Page } from "puppeteer";

puppeteer.use(StealthPlugin());
puppeteer.use(randomUserAgent());

interface IBrowserOptions {
  headless: boolean;
  defaultViewport?: {
    width: number;
    height: number;
  };
}

// singleton pattern
export class SuperBrowser {
  private static instance: Browser | null = null;

  constructor() {}
  public async launch(options: IBrowserOptions = { headless: true }) {
    if (!SuperBrowser.instance)
      SuperBrowser.instance = await puppeteer.launch(options);
    const pages = await SuperBrowser.instance.pages();
    if (pages.length > 1) await Promise.all(pages?.map((page) => page.close()));
    return SuperBrowser.instance;
  }
  public async close() {
    if (SuperBrowser.instance) {
      await SuperBrowser.instance.close();
      SuperBrowser.instance = null;
    }
  }

  // s - seconds
  public async sleep(s: number) {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
  }

  public async scroll(page: Page, maxScrolls = 100) {
    let prevHeight = -1;
    let scrollCount = 0;
    while (scrollCount < maxScrolls) {
      await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
      let newHeight = await page.evaluate("document.body.scrollHeight");
      if (newHeight == prevHeight) {
        break;
      }
      scrollCount += 1;
    }
  }
}
