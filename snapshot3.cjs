const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174');
    await page.waitForTimeout(2000);
    // Print DOM info for the Sections
    const info = await page.evaluate(() => {
        const processSec = document.querySelector('section:nth-of-type(3)'); // process is under relative2
        const whyMadsSec = document.querySelector('section:nth-of-type(4)');
        return {
           bodyHeight: document.body.scrollHeight,
        };
    });
    console.log(info)

    // Scroll to WhyMads roughly
    await page.evaluate(() => window.scrollTo(0, 4800));
    await page.waitForTimeout(500);
    const whyMadsRect1 = await page.evaluate(() => {
        return {
           process: document.querySelectorAll("section")[3].getBoundingClientRect(),
           whyMads: document.querySelectorAll("section")[4].getBoundingClientRect(), 
           pricing: document.querySelectorAll("section")[5].getBoundingClientRect()
        }
    });
    console.log("At 4800px")
    console.log(JSON.stringify(whyMadsRect1, null, 2))

    await page.evaluate(() => window.scrollTo(0, 5600));
    await page.waitForTimeout(500);
    const whyMadsRect2 = await page.evaluate(() => {
        return {
           process: document.querySelectorAll("section")[3].getBoundingClientRect(),
           whyMads: document.querySelectorAll("section")[4].getBoundingClientRect(), 
           pricing: document.querySelectorAll("section")[5].getBoundingClientRect()
        }
    });
    console.log("At 5600px")
    console.log(JSON.stringify(whyMadsRect2, null, 2))
    

    await browser.close();
})();
