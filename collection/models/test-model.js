const Database = require('../../root/db');
const connection = require('../../root/module/instances').defaultDatabase;

class Test extends Database{
    constructor() {
        super(connection, "test");
    }
}
module.exports = Test;
