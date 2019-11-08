const eventType = require("./event-types");
const Listener = require("./listener");

/*
*
* @private
* @param(string) collection
* @param(string) eventType
* @param(function) callback
*
* */
const subscribe = (database, collection, eventType, callback) => {
    new Listener(database, collection, eventType, callback).listen();
};


class Changes {
    constructor(database, collection) {
        this.database = database;
        this.collection = collection;
    }

    childAdded(subCollection, callback) {
        subscribe(this.database, this.getCollectionString(subCollection), eventType.child_added, callback);
    }

    childRemoved(subCollection, callback) {
        subscribe(this.database, this.getCollectionString(subCollection), eventType.child_removed, callback);
    }

    childChanged(subCollection, callback) {
        subscribe(this.database, this.getCollectionString(subCollection), eventType.child_changed, callback);
    }

    childMoved(subCollection, callback) {
        subscribe(this.database, this.getCollectionString(subCollection), eventType.child_moved, callback);
    }

    getCollectionString(subCollection) {
        return subCollection === null ? this.collection : `${this.collection}/${subCollection}`
    }


}

module.exports = Changes;
