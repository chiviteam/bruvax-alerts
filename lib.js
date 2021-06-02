//@ts-check
const {firefox} = require('playwright');
const fs = require('fs');
const TurndownService = require('turndown');

async function grab(turndownService, context, page, scrapeUrl, selector, id) {
    
    await context.clearCookies();
    await page.goto(scrapeUrl);

    // make all relative urls absolute
    await page.$$eval('a', (links) => {
        links.forEach(link => {
            link.href = link.href
        })
    });

    const elementHandle = await page.$(selector);
    //await elementHandle.screenshot({ path: `scrapes/${id}.png` });
    const innerHtml = await elementHandle.innerHTML();
    
    //fs.writeFileSync(`scrapes/${id}.md`, turndownService.turndown(`<div><div>${innerHtml}</div><img src="scrapes/${id}.png"><p><a href="${scrapeUrl}">Source</a></p></div>`));
    fs.writeFileSync(`scrapes/${id}.md`, turndownService.turndown(`<div><div>${innerHtml}</div><p><a href="${scrapeUrl}">Source</a></p></div>`));
}

async function grabAll(checks) {

    const turndownService = new TurndownService({emDelimiter: '*'}).remove('script');

    let browser = null;
    try {
        browser = await firefox.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        let failed = false;

        for (const check of checks) {
            try {
                await grab(turndownService, context, page, check.scrapeUrl, check.selector, check.id);   
            } catch (e) {
                failed = true;
                console.error(`Something failed for check ${check.id}`, e);
            }
        }
        if (failed) {
            return process.exit(1);
        }
    } finally {
        if (browser != null) {
            await browser.close();
        }
        console.log("Finished.");
    }
}

module.exports = {grabAll};
