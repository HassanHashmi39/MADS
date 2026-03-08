const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174');
    await page.waitForTimeout(2000);

    // Scroll mapping
    for (let scroll = 4000; scroll <= 7000; scroll+=400) {
        await page.evaluate((y) => window.scrollTo(0, y), scroll);
        await page.waitForTimeout(100);
        const rects = await page.evaluate(() => {
            return {
               process: document.querySelectorAll("section")[3].getBoundingClientRect(),
               whyMads: document.querySelectorAll("section")[4].getBoundingClientRect(), 
               pricing: document.querySelectorAll("section")[5].getBoundingClientRect()
            }
        });
        console.log(`Scroll ${scroll}:`);
        console.log(`  Process.bottom=${rects.process.bottom}`);
        console.log(`  WhyMads.bottom=${rects.whyMads.bottom} WhyMads.top=${rects.whyMads.top} Height=${rects.whyMads.height}`);
        console.log(`  Pricing.top=${rects.pricing.top}`);
    }

    await browser.close();
})();
