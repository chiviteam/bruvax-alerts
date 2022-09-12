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
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "autoscout-sandero"
        }*/,
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=hahn",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-hilary-hahn"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=chen",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-chen"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=jansen",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-jansen"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=argerich",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-argerich"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=belcea",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-belcea"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=balanescu",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-balanescu"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=kennedy",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-kennedy"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=kronos",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-kronos"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=jumi",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-jumi"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=kang",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-kang"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=chang",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-chang"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=joshua",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-joshua"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=gabetta",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-gabetta"
        },
        {
            scrapeUrl: "https://www.bozar.be/fr/search?contentType=event&searchQuery=savall",
            selector: '.search-page__results-list > article:not(.hidden)',
            multipleItemId: async function itemId(el) {
                return await el.getAttribute('about');
            },
            id: "bozar-savall"
        }
    ]

    lib.grabAll(checks);
    
})();
