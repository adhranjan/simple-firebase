const q = require("q");
const value = require("../../change-listener/event-types").value;

class Model {
    constructor(database, collection) {
        this.collection = collection;
        this.database = database;
    }

    add(uniqueId, data) {
        /*
        * Replaces the previous data if it exist, and appends data into collection
        */
        return this.database
            .ref(this.collection)
            .child(uniqueId)
            .set(data);
    };

    updateOrCreate(uniqueId, data) {
        /*
        * Updates provided attributes in collection if exist, else creates the collection
        */
        return this.database
            .ref(this.collection)
            .child(uniqueId)
            .update(data);
    };

    get(uniqueId) {
        /*
        * Gets the item from the collection of given id
        */
        let deferred = q.defer();
        this.database
            .ref(this.collection)
            .child(uniqueId)
            .on(value, snapshot => {
                if (snapshot.val() === null) {
                    deferred.reject(
                        `${uniqueId} in ${this.collection} collection not found.`
                    );
                } else {
                    deferred.resolve(snapshot.val());
                }
            });
        return deferred.promise;
    };

    firstOrCreate(uniqueId, data) {
        /*
    	* Creates the item if the id doesn't exist or provides the data if it exist
    	*/
        let deferred = q.defer();
        this.get(uniqueId).then((result) => {
            deferred.resolve(result)
        }).catch(() => {
            if (data === void 0) {
                deferred.reject({
                    message: `Unable to add to  ${this.collection} collection, data undefined.`
                });
            } else {
                this.add(uniqueId, data).then(() => {
                    deferred.resolve(data);
                })
            }
        });
        return deferred.promise;
    }

    // orderedGet(uniqueId, startAt, endAt) {
    //     let deferred = q.defer();
    //
    //     if (!endAt) {
    //         this.database
    //             .ref(this.collection)
    //             .child(uniqueId)
    //             .orderByKey()
    //             .startAt(startAt)
    //             .on(value, snapshot => {
    //                 if (snapshot.val() === null) {
    //                     deferred.reject(
    //                         "Data not available on given filter at firebase"
    //                     );
    //                 } else {
    //                     deferred.resolve(snapshot.val());
    //                 }
    //             });
    //     } else {
    //         this.database
    //             .ref(this.collection)
    //             .child(uniqueId)
    //             .orderByKey()
    //             .startAt(startAt)
    //             .endAt(endAt)
    //             .on(value, snapshot => {
    //                 if (snapshot.val() === null) {
    //                     deferred.reject(
    //                         "Data not available on given filter at firebase"
    //                     );
    //                 } else {
    //                     deferred.resolve(snapshot.val());
    //                 }
    //             });
    //     }
    //     return deferred.promise;
    // };
    //
    // limitToLast(uniqueId, n) {
    //     let deferred = q.defer();
    //     this.database
    //         .ref(this.collection)
    //         .child(uniqueId)
    //         .limitToLast(n)
    //         .on(value, snapshot => {
    //             if (snapshot.val() === null) {
    //                 deferred.reject(
    //                     "Data not available on given filter at firebase"
    //                 );
    //             } else {
    //                 deferred.resolve(snapshot.val());
    //             }
    //         });
    //     return deferred.promise;
    // };
}

module.exports = Model;
