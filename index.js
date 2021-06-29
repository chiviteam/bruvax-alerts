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
            scrapeUrl: "https://www.splashbrussel.be/uurrooster-activiteiten",
            selector: "main",
            id: "splash-uurrooster"
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
            scrapeUrl: "https://www.guppies.be/",
            selector: '.template',
            id: "guppies"
        }/*,
        {
            scrapeUrl: "https://www.n22.brussels/activiteiten-zoeken?f%5B0%5D=field_activiteit_doelgroep%3A1347&f%5B1%5D=gc_gemeente_gc%3AGC%20Essegem%20%23%23%23%20Jette",
            selector: '#block-system-main',
            id: "essegem-kleuters"
        },
        {
            scrapeUrl: "https://www.n22.brussels/activiteiten-zoeken?f%5B0%5D=field_activiteit_doelgroep%3A1347&f%5B1%5D=gc_gemeente_gc%3AGC%20De%20Zeyp%20%23%23%23%20Ganshoren",
            selector: '#block-system-main',
            id: "dezeyp-kleuters"
        },
        {
            scrapeUrl: "https://www.n22.brussels/activiteiten-zoeken?f%5B0%5D=field_activiteit_doelgroep%3A1347&f%5B1%5D=gc_gemeente_gc%3AGC%20Nekkersdal%20%23%23%23%20Laken",
            selector: '#block-system-main',
            id: "nekkersdal-kleuters"
        },
        {
            scrapeUrl: "https://www.n22.brussels/activiteiten-zoeken?f%5B0%5D=field_activiteit_doelgroep%3A1347&f%5B1%5D=gc_gemeente_gc%3AGC%20De%20Platoo%20%23%23%23%20Koekelberg",
            selector: '#block-system-main',
            id: "deplatoo-kleuters"
        },
        {
            scrapeUrl: "https://www.covidsafe.be/",
            selector: 'body',
            id: "covidsafe"
        }*/
    ]

    lib.grabAll(checks);
    
})();
