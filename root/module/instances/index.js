/*
* For Every New Database you connect,
* export the connection
* */

let defaultDatabase = require('./connect-default')


module.exports = {
    defaultDatabase: new defaultDatabase().connect(),
};
