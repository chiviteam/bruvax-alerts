//@ts-check
const {firefox} = require('playwright');
const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

async function grab(turndownService, context, page, check) {
    
    const scrapeUrl = check.scrapeUrl;
    const selector = check.selector;
    const id = check.id;
    const multiple =  check.multiple;

    await context.clearCookies();
    await page.goto(scrapeUrl);

    // make all relative urls absolute
    await page.$$eval('a', (links) => {
        links.forEach(link => {
            link.href = link.href
        })
    });

    if (multiple) {

        const elementHandles = await page.$$(selector);
        for(const el of elementHandles) {
            const innerHtml = await el.innerHTML();
            const itemId = await check.multipleItemId(el);
            const mdFilePath = `scrapes/${id}/${itemId}.md`;
            writeMarkdownFile(turndownService, mdFilePath, innerHtml, scrapeUrl);
        }

    } else {
        const elementHandle = await page.$(selector);
        const innerHtml = await elementHandle.innerHTML();
        const mdFilePath = `scrapes/${id}.md`;
        writeMarkdownFile(turndownService, mdFilePath, innerHtml, scrapeUrl);
    }

}

function writeMarkdownFile(turndownService, mdFilePath, innerHtml, scrapeUrl) {
    ensureDirectoryExistence(mdFilePath);
    fs.writeFileSync(mdFilePath, turndownService.turndown(`<div><div>${innerHtml}</div><p><a href="${scrapeUrl}">Source</a></p></div>`));
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
                await grab(turndownService, context, page, check);   
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

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

module.exports = {grabAll};
