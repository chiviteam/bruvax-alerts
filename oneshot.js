const lib = require("./lib");

(async () => {

    console.log("Starting...")

    const checks = [
        {
            scrapeUrl: "https://tickets.vgc.be/activity/subscribe/ESS2122_kleuteratelier",
            selector: '#subscribeActivity',
            id: "kleuteratelier"
        }
    ]

    lib.grabAll(checks);
    
})();