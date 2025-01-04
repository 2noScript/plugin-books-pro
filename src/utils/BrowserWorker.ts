import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import randomUserAgent from "./puppeteer-plugin";
import { Browser, Page ,LaunchOptions} from "puppeteer";

puppeteer.use(StealthPlugin());
puppeteer.use(randomUserAgent());

export type callbackPageHandle = (
  page: Page
) => Promise<void>;

export class SuperBrowser {
  private static instance: Browser | null = null;
  private launchOptions:LaunchOptions
  constructor(launchOptions:LaunchOptions) {
     this.launchOptions=launchOptions
  }


  public async run(callback?: callbackPageHandle) {
    if (!SuperBrowser.instance)
      SuperBrowser.instance = await puppeteer.launch(this.launchOptions);

    const context = await SuperBrowser.instance.createBrowserContext();
    const page = await context.newPage();
    page.setDefaultNavigationTimeout(600000);
    if (callback) await callback(page);

    await page.close();
    await context.close()
  }

  public static async killProcess() {
    if (SuperBrowser.instance) {
      await SuperBrowser.instance.close();
      SuperBrowser.instance = null;
    }
  }
}
