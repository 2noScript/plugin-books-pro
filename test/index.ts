import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    product: 'firefox', // Chạy với Firefox
    headless: false,    // Hiển thị trình duyệt (hoặc true để chạy ẩn)
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');

  console.log(await page.title());

  await browser.close();
})();
