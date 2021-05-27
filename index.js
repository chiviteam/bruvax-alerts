//@ts-check
const {firefox} = require('playwright');
const fs = require('fs');
const TurndownService = require('turndown');

async function grab(turndownService, context, page, scrapeUrl, selector, folder) {
    
    await context.clearCookies();
    await page.goto(scrapeUrl);

    const elementHandle = await page.$(selector);
    //await elementHandle.screenshot({ path: `${folder}/screenshot.png` });
    const innerHtml = await elementHandle.innerHTML();
    
    //fs.writeFileSync(`${folder}/article.md`, turndownService.turndown(`<div><div>${innerHtml}</div><img src="screenshot.png"><p><a href="${scrapeUrl}">Source</a></p></div>`));
    fs.writeFileSync(`${folder}/article.md`, turndownService.turndown(`<div><div>${innerHtml}</div><p><a href="${scrapeUrl}">Source</a></p></div>`));
}

(async () => {

    console.log("Starting...")

    const checks = [
        {
            scrapeUrl: "https://bruvax.brussels.doctena.be/",
            selector: "article",
            folder: "bruvax"
        },
        {
            scrapeUrl: "https://www.circuszonderhanden.be/inschrijven",
            selector: ".page-content",
            folder: "circus"
        },
        {
            scrapeUrl: "https://www.splashbrussel.be/inschrijving",
            selector: "main",
            folder: "splash"
        },
        {
            scrapeUrl: "https://www.eendjesschaarbeek.be/practice_areas",
            selector: 'main',
            folder: "eendjes"
        },
        {
            scrapeUrl: "http://fermedejette.be/nl/de-stages/",
            selector: 'main',
            folder: "ferme-nl"
        },
        {
            scrapeUrl: "https://fermedejette.be/stages/",
            selector: 'main',
            folder: "ferme-fr"
        }
    ]

    var turndownService = new TurndownService({emDelimiter: '*'}).remove('script');

    let browser = null;
    try {
        browser = await firefox.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        let failed = false;

        for (const check of checks) {
            try {
                await grab(turndownService, context, page, check.scrapeUrl, check.selector, check.folder);   
            } catch (e) {
                failed = true;
                console.error("Something failed", e);
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
})();