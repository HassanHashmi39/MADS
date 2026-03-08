const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174');
    await page.waitForTimeout(2000);

    const relativeBounds = await page.evaluate(() => {
        const relative2 = document.querySelector('.relative:nth-of-type(2)');
        const whyMads = document.querySelectorAll("section")[4]; 

        return {
            processSticky: document.querySelectorAll("section")[3].className,
            whyMadsClass: whyMads.className,
            relative2Height: relative2.getBoundingClientRect().height
        }
    });

    console.log(relativeBounds);

    await browser.close();
})();
