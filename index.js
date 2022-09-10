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
        }
    ]

    lib.grabAll(checks);
    
})();
