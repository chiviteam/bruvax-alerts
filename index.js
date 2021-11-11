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
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/albanie",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-albanie"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/montenegro",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-montenegro"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/egypte",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-egypt"
        },
        {
            scrapeUrl: "https://www.nekkersdal.be/activiteiten?f%5B0%5D=activity_target_group%3A165&f%5B1%5D=activity_target_group%3A576&items_per_page=All",
            selector: "#block-system-main-block",
            id: "gc-nekkersdal"
        },
        {
            scrapeUrl: "https://www.essegem.be/activiteiten?items_per_page=All&f%5B0%5D=activity_target_group%3A165&f%5B1%5D=activity_target_group%3A576",
            selector: "#block-system-main-block",
            id: "gc-essegem"
        }
         
    ]

    lib.grabAll(checks);
    
})();
