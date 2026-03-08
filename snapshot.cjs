const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174');
    await page.waitForTimeout(2000);
    // Print DOM info for the Sections
    const info = await page.evaluate(() => {
        const processSec = document.querySelector('section:nth-of-type(5)') || document.querySelector('.relative > section:nth-of-type(1)'); // process
        const whyMadsSec = document.querySelector('section:nth-of-type(6)') || document.querySelector('.relative > section:nth-of-type(2)'); // why mads
        const pricingSec = document.querySelector('section:nth-of-type(7)') || document.querySelector('.relative + section'); // pricing
        
        return {
           process: processSec ? processSec.getBoundingClientRect() : null,
           whyMads: whyMadsSec ? whyMadsSec.getBoundingClientRect() : null,
           pricing: pricingSec ? pricingSec.getBoundingClientRect() : null,
           documentHeight: document.body.scrollHeight,
        };
    });
    console.log(JSON.stringify(info, null, 2));

    await page.evaluate(() => window.scrollBy(0, 3000));
    await page.waitForTimeout(1000);
    const scrolledInfo1 = await page.evaluate(() => {
        const processSec = document.querySelector('.relative > section:nth-of-type(1)');
        const whyMadsSec = document.querySelector('.relative > section:nth-of-type(2)');
        const pricingSec = document.querySelector('.relative + section');
        return {
           process: processSec ? processSec.getBoundingClientRect() : null,
           whyMads: whyMadsSec ? whyMadsSec.getBoundingClientRect() : null,
           pricing: pricingSec ? pricingSec.getBoundingClientRect() : null,
        };
    });
    console.log("SCOlLLED 3000px:");
    console.log(JSON.stringify(scrolledInfo1, null, 2));

    await browser.close();
})();
