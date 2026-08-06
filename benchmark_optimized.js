const puppeteer = require('puppeteer');
const path = require('path');

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto(`file://${path.resolve('index.html')}`);

  // Inject optimization
  await page.evaluate(() => {
    // Re-define apply to avoid querySelectorAll
    window.tweakButtons = [];
    document.querySelectorAll('#bba-tweaks .tw-seg').forEach(function (seg) {
      var key = seg.getAttribute('data-key');
      seg.querySelectorAll('button').forEach(function (b) {
        window.tweakButtons.push({ btn: b, key: key, val: b.getAttribute('data-val') });
      });
    });

    window.apply = function() {
      applyVars(ATM[TW.atmosphere] || ATM.gallery);
      applyVars(RHY[TW.rhythm] || RHY.balanced);
      applyVars(ACC[TW.accent] || ACC.magenta);
      window.tweakButtons.forEach(function(item) {
        item.btn.setAttribute('aria-pressed', item.val === TW[item.key] ? 'true' : 'false');
      });
    }
  });

  const time = await page.evaluate(() => {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        const btn = window.tweakButtons[0].btn;
        if (btn) btn.click();
    }
    return performance.now() - start;
  });

  console.log(`Optimized benchmark (10000 setTweak/apply runs via click): ${time.toFixed(2)} ms`);
  await browser.close();
}

run();
