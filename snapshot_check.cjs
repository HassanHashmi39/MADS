const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174');
    await page.waitForTimeout(2000);

    // we will take a screenshot to actually SEE what the DOM looks like!
    await page.evaluate(() => window.scrollTo(0, 4000));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'snapshot_4000.png' });

    await page.evaluate(() => window.scrollTo(0, 4800));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'snapshot_4800.png' });

    await browser.close();
})();
