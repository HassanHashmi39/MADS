const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174');
    await page.waitForTimeout(2000);

    const check = await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll("section"));
        
        let processSec = sections.find(s => s.innerText.includes('Here’s how to Start'));
        let whyMadsSec = sections.find(s => s.innerText.includes('Why MADS?'));
        let pricingSec = sections.find(s => s.innerText.includes('Pricing') && s.tagName === 'SECTION');

        return {
            processRect: processSec ? processSec.getBoundingClientRect() : null,
            whyMadsRect: whyMadsSec ? whyMadsSec.getBoundingClientRect() : null,
            pricingRect: pricingSec ? pricingSec.getBoundingClientRect() : null,
        }
    });

    console.log("Initial load:")
    console.log(check)

    // Scroll to where Process should be sticky, then WhyMads overlapping
    await page.evaluate(() => window.scrollTo(0, 3000));
    await page.waitForTimeout(500);
    const scroll1 = await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll("section"));
        let processSec = sections.find(s => s.innerText.includes('Here’s how to Start'));
        let whyMadsSec = sections.find(s => s.innerText.includes('Why MADS?'));
        let pricingSec = sections.find(s => s.innerText.includes('Pricing') && s.tagName === 'SECTION');
        return {
            process: processSec ? processSec.getBoundingClientRect() : null,
            whyMads: whyMadsSec ? whyMadsSec.getBoundingClientRect() : null,
            pricing: pricingSec ? pricingSec.getBoundingClientRect() : null,
            processZIndex: window.getComputedStyle(processSec).zIndex,
            whyMadsZIndex: window.getComputedStyle(whyMadsSec).zIndex,
            processBg: window.getComputedStyle(processSec).backgroundColor,
            whyMadsBg: window.getComputedStyle(whyMadsSec).backgroundColor,
        }
    });
    console.log("After 3000px:")
    console.log(scroll1)

    // Scroll to Pricing overlapping
    await page.evaluate(() => window.scrollTo(0, 4000));
    await page.waitForTimeout(500);
    const scroll2 = await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll("section"));
        let processSec = sections.find(s => s.innerText.includes('Here’s how to Start'));
        let whyMadsSec = sections.find(s => s.innerText.includes('Why MADS?'));
        let pricingSec = sections.find(s => s.innerText.includes('Pricing') && s.tagName === 'SECTION');
        return {
            process: processSec ? processSec.getBoundingClientRect() : null,
            whyMads: whyMadsSec ? whyMadsSec.getBoundingClientRect() : null,
            pricing: pricingSec ? pricingSec.getBoundingClientRect() : null,
        }
    });
    console.log("After 4000px:")
    console.log(scroll2)

    await browser.close();
})();
