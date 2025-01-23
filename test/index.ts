import { firefox } from 'playwright';

(async () => {
  const browser = await firefox.connect(
    'ws://localhost:51183/e3f3412829dfd664f6345d30b433f7be' 
  );

  const page = await browser.newPage();
  await page.goto('http://example.com');

  console.log(await page.title());

  await browser.close();
})();
