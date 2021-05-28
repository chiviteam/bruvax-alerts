const lib = require("./lib");

(async () => {

    console.log("Starting...")

    const checks = [
        {
            scrapeUrl: "http://fermedejette.be/nl/de-stages/",
            selector: 'main',
            id: "ferme-nl"
        }
    ]

    lib.grabAll(checks);
    
})();