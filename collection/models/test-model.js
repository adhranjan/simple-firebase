'use strict'
const Database = require('../../root/db');

const whenChildAdded = (snapshot) => {
    console.log(snapshot.val())
};

const connection = require('../../root/module/instances').defaultDatabase;

class Test extends Database {
    constructor() {
        super(connection, "test");
        this.childRemoved(1, whenChildAdded);
    }

}

module.exports = Test;
