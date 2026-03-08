const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174');
    await page.waitForTimeout(2000);

    const check = await page.evaluate(() => {
        return {
            processTag: document.querySelectorAll("section")[3].id || document.querySelectorAll("section")[3].tagName,
            whyMadsTag: document.querySelectorAll("section")[4].id || document.querySelectorAll("section")[4].tagName,
            pricingTag: document.querySelectorAll("section")[5].id || document.querySelectorAll("section")[5].tagName,
            testimo: document.querySelectorAll("section")[6].id || document.querySelectorAll("section")[6].tagName,
            comp1: document.querySelectorAll("section")[3].querySelector('h2') ? document.querySelectorAll("section")[3].querySelector('h2').innerText : "",
            comp2: document.querySelectorAll("section")[4].querySelector('h2') ? document.querySelectorAll("section")[4].querySelector('h2').innerText : "",
            comp3: document.querySelectorAll("section")[5].querySelector('h2') ? document.querySelectorAll("section")[5].querySelector('h2').innerText : "",
            comp4: document.querySelectorAll("section")[6].querySelector('h2') ? document.querySelectorAll("section")[6].querySelector('h2').innerText : "",
        }
    });

    console.log(check)

    await browser.close();
})();
