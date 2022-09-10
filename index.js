const lib = require("./lib");

(async () => {

    console.log("Starting...")

    const checks = [
        {
            scrapeUrl: "https://terresneuves.be/enfants/",
            selector: '#content',
            id: "terres-neuves"
        }/*,
        {
            scrapeUrl: "https://www.autoscout24.be/fr/lst/dacia/sandero?fregfrom=2015&sort=age&desc=1&cy=B&atype=C&ustate=N%2CU&powertype=kw&priceto=6000",
            selector: 'main > article',
            multiple: true,
            id: "autoscout-sandero"
        }*/,
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=hahn",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-hilary-hahn"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=chen",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-chen"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=jansen",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-jansen"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=argerich",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-argerich"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=belcea",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-belcea"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=balanescu",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-balanescu"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=kennedy",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-kennedy"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=kronos",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-kronos"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=jumi",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-jumi"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=kang",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-kang"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=chang",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-chang"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=joshua",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-joshua"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=gabetta",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-gabetta"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=savall",
            selector: '.search-page__results-list > article:not(.hidden)',
            multiple: true,
            id: "bozar-savall"
        }
    ]

    lib.grabAll(checks);
    
})();
