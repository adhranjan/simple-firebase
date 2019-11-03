require('colors');
module.exports = function (fireBaseJSON, databaseUrl, appName) {
    let admin = require("firebase-admin");
    try {
        admin.initializeApp({
                credential: admin.credential.cert(fireBaseJSON),
                databaseURL: databaseUrl
            },
            appName
        );
    } catch (e) {
        console.error(`-------------------------------------------Failed Initializing ${appName}-------------------------------------------\n`.bgRed);
        throw new Error(e.bgRed)
    }
    return admin.app(appName);
};
