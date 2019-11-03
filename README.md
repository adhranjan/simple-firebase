# Simple Firebase
Connect to multiple firebase with easy configuration. 

##Installation
``````
git clone git@github.com:adhranjan/simple-firebase.git
npm i
``````
By the time, I hope you already have created a firebase project.

####For Default Connection
````
create .env from with the reference of .env.example
set every varable in .env

go to -> root/module/instances/default/connect-default.js
set the url for your firebase 
create a file named `firebase-admin.json` in the same directory that comes from service accoount in firebase
````
Your file will look like this
```
const connection = require("../connect");
class DefaultConnection{
    constructor(){
        this.url = process.env.DEFAULT_DATABASE_URL;
        this.json = require("./firebase-admin.json");
        this.name = "yourDataBaseNameUsedWhenYouAreUsingMultipleFireBase";
    }

    connect(){
        return new connection(this.url, this.json, this.name);
    }

}
module.exports = DefaultConnection;


```
You are now connected to firebase


###Using Models
almost

```
Create your class in collection/models/ directory

const Database = require('../../root/db');
const connection = require('../../root/module/instances').defaultDatabase;
// Choose which databse you wish to connect with

class AnotherTest extends Database{
    constructor() {
        super(connection, "nameYourCollectionHere");
    }
}
module.exports = AnotherTest;
```

Inside the business logic
```
/*
* Access collection object by using camelCase of the filename via require('./collection/index')
* or you can directly create your own object of the model
* * */
const anotherTest  = require('./collection/index').anotherTest;

anotherTest.firstOrCreate("uniqueId",{
    name:"another test"
}).then((d)=>{
    console.log(d)
}).catch((e)=>{
    console.log(e)
});


```



##Available Operations
`add()` 

Replaces the previous data if it exist, and appends data into collection

`updateOrCreate()`

Updates provided attributes in collection if exist, else creates the collection

`get()`

Gets the item from the collection of given id

`firstOrCreate()`

Creates the item if the id doesn't exist or provides the data if it exist

