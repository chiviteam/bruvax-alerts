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
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/macedoine_du_nord",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-macedonia"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/egypte",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-egypt"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/islande",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-iceland"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/taiwan",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-taiwan"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/japon",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-japan"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/costa_rica",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-costa-rica"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/jordanie",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-jordania"
        }
    ]

    lib.grabAll(checks);
    
})();
