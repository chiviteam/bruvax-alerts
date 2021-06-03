const lib = require("./lib");

(async () => {

    console.log("Starting...")

    const checks = [
        {
            scrapeUrl: "http://www.covidsafe.be/",
            selector: 'body',
            id: "covidsafe"
        }
    ]

    lib.grabAll(checks);
    
})();