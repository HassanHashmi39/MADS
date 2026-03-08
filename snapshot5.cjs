const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174');
    await page.waitForTimeout(2000);

    const data = await page.evaluate(() => {
        const process = document.querySelectorAll("section")[3];
        const whyMads = document.querySelectorAll("section")[4]; 
        
        return {
            processSticky: window.getComputedStyle(process).position,
            whyMadsBg: window.getComputedStyle(whyMads).backgroundColor,
            whyMadsZIndex: window.getComputedStyle(whyMads).zIndex,
            whyMadsPos: window.getComputedStyle(whyMads).position,
            whyMadsRelativeBounds: whyMads.getBoundingClientRect()
        }
    });
    console.log(data);

    await browser.close();
})();
