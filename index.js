const lib = require("./lib");

(async () => {

    console.log("Starting...")

    const checks = [
        {
            scrapeUrl: "https://terresneuves.be/enfants/",
            selector: '#content',
            id: "terres-neuves"
        }
    ]

    lib.grabAll(checks);
    
})();
