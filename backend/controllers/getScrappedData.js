import puppeteer from "puppeteer";

export const getData = async (req, res) => {
  // const { url, selector } = req.body;
  // const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'], ignoreHTTPSErrors: true, dumpio: false });
  // const page = await browser.newPage();

  // // await page.goto('https://telegrafi.com/lajme/', {
  // //   // waitUntil: "load",
  // //   // Remove the timeout
  // //   // timeout: 0,
  // //   waitUntil: 'networkidle2',
  // //   timeout: 60000,
  // // });

  // await page.goto('https://www.telegrafi.com')
  // // let data = page.content()
  // // console.log(data)
  // // await page.waitForSelector(".featuredImage img", {
  // //   visible: true,
  // // });
  // // const data = await page.evaluate((selector) => {
  // //   // console.log(hey)
  // //   const images = document.querySelectorAll(selector);

  // //   const urls = Array.from(images).map((v) => v.src);

  // //   return urls;
  // // }, selector);
  // await browser.close();
  // try {
  //   res.status(200).json({  });
  // } catch (e) {
  //   res.status(500).json({ message: "Something went wrong", error: e });
  // }
};
