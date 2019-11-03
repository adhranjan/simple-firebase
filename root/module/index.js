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
        console.log(e);
        process.exit();
    }
    return admin.app(appName);
};
