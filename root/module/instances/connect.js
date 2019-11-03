require('dotenv').config()
const firebase = require("../index");

class Connection {
    constructor(url, json, firebaseName) {
        this.url = url;
        this.json = json;
        this.firebaseName = firebaseName;
        if (this.url === void 0) {
            throw new Error(`Firebase Url Not defined for ${firebaseName} firebase.`.bgRed)
        }

        if (this.json === void 0) {
            throw new Error('Firebase JSON Undefined'.bgRed)
        }
        let firebaseJson;
        try {
            firebaseJson = this.json;
        } catch (e) {
            console.error('-------------------------------------------Failed Loading Firebase Admin JSON-------------------------------------------\n'.bgRed);
            throw new Error('Firebase Admin JSON not provided'.bgRed)
        }
        return new firebase(firebaseJson, this.url, this.firebaseName).database();
    }
}
module.exports = Connection;
