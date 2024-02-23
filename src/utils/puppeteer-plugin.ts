import { PuppeteerExtraPlugin } from "puppeteer-extra-plugin";
import { browserHeader } from "fake-browser-headers";

class PuppeteerRandomUa extends PuppeteerExtraPlugin {
  constructor(opts = {}) {
    super(opts);
  }
  get name() {
    return "user-agent";
  }
  async onPageCreated(page: any): Promise<void> {
    const ua: any = browserHeader();
    await page?.setUserAgent(ua["User-Agent"]);
  }
}

export default function randomUserAgent(opts?: any): PuppeteerRandomUa {
  return new PuppeteerRandomUa(opts);
}
