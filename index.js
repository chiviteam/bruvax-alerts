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
            scrapeUrl: "https://www.n22.brussels/activiteiten-zoeken?field_type_activiteit=All&field_activiteit_datum_value2%5Bdate%5D=&field_activiteit_datum_value%5Bdate%5D=&f%5B0%5D=field_activiteit_doelgroep%3A1347&f%5B1%5D=gc_gemeente_gc%3AGC%20Essegem%20%23%23%23%20Jette",
            selector: '#block-system-main',
            id: "essegem-kleuters"
        }
    ]

    lib.grabAll(checks);
    
})();
