const connection = require("./connect");
/*
* For Every New Database you connect,
* Create a connection class
* */

class DefaultConnection{
    constructor(){
        this.url = process.env.DEFAULT_FIREBASE_DB_URL;
        this.json = "./firebase-admin.json";
        this.name = "default";
    }

    connect(){
        return new connection(this.url, this.json, this.name);
    }

}
module.exports = DefaultConnection;
