const firebase = require("../index");

class Connection {
    constructor(url, jsonPath, firebaseName) {
        this.url = url;
        this.jsonPath = jsonPath;
        this.firebaseName = firebaseName;
        if (this.url === void 0) {
            throw new Error('Firebase Url Undefined'.bgRed)
        }

        if (this.jsonPath === void 0) {
            throw new Error('Firebase JSON Undefined'.bgRed)
        }
        let firebaseJson;
        try {
            firebaseJson = require(this.jsonPath);
        } catch (e) {
            console.error('-------------------------------------------Failed Loading Firebase Admin JSON-------------------------------------------\n'.bgRed);
            throw new Error('Firebase Admin JSON not provided'.bgRed)
        }
        return new firebase(firebaseJson, this.url, this.firebaseName).database();
    }
}
module.exports = Connection;
