const lib = require("./lib");

(async () => {

    console.log("Starting...")

    const checks = [
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/maldives",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-maldives"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/georgie",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-georgie"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/thailande",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-thailande"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/egypte",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-egypt"
        },
        {
            scrapeUrl: "https://diplomatie.belgium.be/fr/Services/voyager_a_letranger/conseils_par_destination/roumanie",
            selector: "#block-system-main .field-name-body .field-item table",
            id: "diplo-roumanie"
        },/*
        {
            scrapeUrl: "https://www.nekkersdal.be/activiteiten?f%5B0%5D=activity_target_group%3A165&f%5B1%5D=activity_target_group%3A576&items_per_page=All",
            selector: "#block-system-main-block",
            id: "gc-nekkersdal"
        },
        {
            scrapeUrl: "https://www.essegem.be/activiteiten?items_per_page=All&f%5B0%5D=activity_target_group%3A165&f%5B1%5D=activity_target_group%3A576",
            selector: "#block-system-main-block",
            id: "gc-essegem"
        },*/
        {
            scrapeUrl: "https://www.canzonieregrecanicosalentino.net/tour/?lang=en",
            selector: 'article',
            id: "concerts-canzionere"
        },
        {
            scrapeUrl: "https://mahsavahdat.net/concerts/upcoming/",
            selector: 'article',
            id: "concerts-mahsavahdat"
        },
        {
            scrapeUrl: "https://www.giorafeidman-online.com/termine",
            selector: '#dm_content ul',
            id: "concerts-giorafeidman"
        },
        {
            scrapeUrl: "https://terresneuves.be/enfants/",
            selector: '#content',
            id: "terres-neuves"
        }
    ]

    lib.grabAll(checks);
    
})();
