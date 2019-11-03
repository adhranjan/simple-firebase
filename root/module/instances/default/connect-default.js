const connection = require("../connect");
/*
* For Every New Database you connect,
* Create a connection class
* */

class DefaultConnection{
    constructor(){
        this.url = process.env.DEFAULT_DATABASE_URL;
        this.json = require("./firebase-admin.json");
        this.name = "default";
        return new connection(this.url, this.json, this.name);
    }
}
module.exports = DefaultConnection;
