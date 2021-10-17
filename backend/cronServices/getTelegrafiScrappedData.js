
const TelegrafiSelector = ".aktuale-widget .row a:not([class])";

import puppeteer from "puppeteer";

export const getImages = (async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
  );
  await page.setDefaultNavigationTimeout(60000);

  await page.goto("https://www.telegrafi.com/lajme");
  await page.setViewport({
    width: 1200,
    height: 800,
  });

  await autoScroll(page);

  await page.screenshot({
    path: "yoursite.png",
    fullPage: true,
  });
  try {
    const data = await page.evaluate((TelegrafiSelector) => {
      const sourceRef = document.querySelectorAll(TelegrafiSelector);

      const imageRef = document.querySelectorAll(
        TelegrafiSelector.concat(" img.lazy-loaded:not(.commentsIcon)")
      );
      const telegrafiScrappedData = Object.entries(sourceRef).map(
        ([key, elem]) => ({
          href: elem.href ?? "",
          description: elem.innerText ?? "",
          images:
            key == 0
              ? document.querySelector(".featuredImage img").src
              : Array.from(imageRef)[key - 1]?.currentSrc,
        })
      );

      return telegrafiScrappedData;
    }, TelegrafiSelector);
    console.log("Lirim");
    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
  }
  await browser.close();
})();

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        console.log(scrollHeight);
        console.log(totalHeight);
        if (totalHeight >= scrollHeight - 4000) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
