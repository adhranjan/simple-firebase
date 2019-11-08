'use strict'
const Database = require('../../root/db');
const connection = require('../../root/module/instances').defaultDatabase;
const locationChangeCallback = (snapshot) => {
    // Do something on location changed
};

class Test extends Database {
    constructor() {
        super(connection, "user");
    }

    subscribeLocationUpdate(id) {
        this.childChanged(`${id}/location`, locationChangeCallback).listen();
    }

    unsubscribeLocationUpdate(id) {
        this.childChanged(`${id}/location`, locationChangeCallback).ignore();
    }

}

module.exports = Test;
