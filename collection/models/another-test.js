const Database = require('../../root/db');
const connection = require('../../root/module/instances').defaultDatabase;

class AnotherTest extends Database{
    constructor() {
        super(connection, "another-test");
    }
}
module.exports = AnotherTest;
