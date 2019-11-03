/*
* Access collection object by using camelCase of the filename via require('./collection/index')
* or you can directly create your own object of the model
* * */
const anotherTest  = require('./collection/index').testModel;

anotherTest.add(1,{
    name:"happy singh"
})

anotherTest
