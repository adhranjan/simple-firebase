'use strict'
const Database = require('../../root/db');
const connection = require('../../root/module/instances').defaultDatabase;
class Test extends Database {
    constructor() {
        super(connection, "test");
        this.childAdded(this.whenChildAdded);
    }

    whenChildAdded(snapshot){
        console.log(snapshot.val())
    }
}
module.exports = Test;
