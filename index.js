//@ts-check
const {firefox} = require('playwright');
const fs = require('fs');
const TurndownService = require('turndown');

async function grab(turndownService, context, page) {

    const scrapeUrl = 'https://bruvax.brussels.doctena.be/';

    await page.goto(scrapeUrl);

    //const innerHtml = await page.innerHTML('article');
    const elementHandle = await page.$('article');
    await elementHandle.screenshot({ path: 'bruvax/screenshot.png' });
    //innerHtml = await innerHtml.content()
    const innerHtml = await elementHandle.innerHTML();
    fs.writeFileSync('bruvax/article.md', turndownService.turndown(`<div><div>${innerHtml}</div><img src="screenshot.png"><p><a href="${scrapeUrl}">Source</a></p></div>`));
}

(async () => {

    console.log("Starting...")

    var turndownService = new TurndownService({emDelimiter: '*'}).remove('script');

    let browser = null;
    try {
        browser = await firefox.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        await grab(turndownService, context, page);

    } catch (e) {
        console.error("Something failed", e);
        return process.exit(1);
    } finally {
        if (browser != null) {
            await browser.close();
        }
        console.log("Finished.");
    }
})();