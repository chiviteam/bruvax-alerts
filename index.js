const lib = require("./lib");

(async () => {

    console.log("Starting...")

    const checks = [
        {
            scrapeUrl: "https://www.circuszonderhanden.be/inschrijven",
            selector: ".page-content",
            id: "circus"
        },
        {
            scrapeUrl: "https://www.splashbrussel.be/inschrijving",
            selector: "main",
            id: "splash"
        },
        {
            scrapeUrl: "https://www.eendjesschaarbeek.be/practice_areas",
            selector: 'main',
            id: "eendjes"
        },
        {
            scrapeUrl: "http://fermedejette.be/nl/de-stages/",
            selector: 'main',
            id: "ferme-nl"
        },
        {
            scrapeUrl: "https://fermedejette.be/stages/",
            selector: 'main',
            id: "ferme-fr"
        }
    ]

    lib.grabAll(checks);
    
})();
