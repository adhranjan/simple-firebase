/*
* Provide all the models
* */

const test =  require('./models/test-model');
const anotherTest =  require('./models/another-test');
module.exports = {
    test: new test(),
    anotherTest: new anotherTest()
};
