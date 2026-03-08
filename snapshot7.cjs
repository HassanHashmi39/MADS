const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174');
    await page.waitForTimeout(2000);

    const check = await page.evaluate(() => {
        return {
            processClassName: document.querySelectorAll("section")[3].className,
            whyMadsClassName: document.querySelectorAll("section")[4].className,
            pricingClassName: document.querySelectorAll("section")[5].className,
        }
    });

    console.log(check)

    await browser.close();
})();
