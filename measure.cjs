const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Start measuring time
    const start = Date.now();
    await page.goto('http://localhost:4173');
    
    // Wait for network to be idle
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - start;

    const perfData = await page.evaluate(() => {
        const p = performance.getEntriesByType('navigation')[0];
        return {
           dns: p.domainLookupEnd - p.domainLookupStart,
           tcp: p.connectEnd - p.connectStart,
           ttfb: p.responseStart - p.requestStart,
           response: p.responseEnd - p.responseStart,
           domInteractive: p.domInteractive - p.responseEnd,
           domComplete: p.domComplete - p.domInteractive,
           loadEvent: p.loadEventEnd - p.loadEventStart,
           totalLoadTime: p.duration
        };
    });

    console.log(`Total time until network idle: ${loadTime}ms\n`);
    console.log("Performance Data (ms):");
    console.log(JSON.stringify(perfData, null, 2));

    await browser.close();
})();
