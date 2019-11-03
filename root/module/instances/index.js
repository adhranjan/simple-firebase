/*
* For Every New Database you connect,
* export the connection
* */

let defaultDatabase = require('./default/connect-default')


module.exports = {
    defaultDatabase: new defaultDatabase().connect(),
};
