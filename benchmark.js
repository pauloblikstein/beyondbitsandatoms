const puppeteer = require('puppeteer');
const path = require('path');

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto(`file://${path.resolve('index.html')}`);

  const time = await page.evaluate(() => {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        // We'll click the buttons to trigger setTweak and apply repeatedly,
        // which includes the querySelectorAll calls
        const btn = document.querySelector('#bba-tweaks .tw-seg button');
        if (btn) btn.click();
    }
    return performance.now() - start;
  });

  console.log(`Baseline benchmark (10000 setTweak/apply runs via click): ${time.toFixed(2)} ms`);
  await browser.close();
}

run();
