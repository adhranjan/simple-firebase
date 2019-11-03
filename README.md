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

// TODO add 

##Available Operations
`add()` 

Replaces the previous data if it exist, and appends data into collection

`updateOrCreate()`

Updates provided attributes in collection if exist, else creates the collection

`get()`

Gets the item from the collection of given id

`firstOrCreate()`

Creates the item if the id doesn't exist or provides the data if it exist

