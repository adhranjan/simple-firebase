class Listener {
    constructor(database, collection, eventType, callBack) {
        this.database = database;
        this.collection = collection;
        this.eventType = eventType;
        this.callBack = callBack;
    }

    listen() {
        this.database.ref(this.collection).on(this.eventType, this.callBack)
    }
}

module.exports = Listener;
