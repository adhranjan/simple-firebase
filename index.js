/*
* Access collection object by using camelCase of the filename via require('./collection/index')
* or you can directly create your own object of the model
* * */
const anotherTest  = require('./collection/index').anotherTest;

anotherTest.firstOrCreate(743,{
    name:"another test"
}).then((d)=>{
    console.log(d)
}).catch((e)=>{
    console.log(e)
});
