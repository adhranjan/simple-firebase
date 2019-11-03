const eventType = require("./event-types");


class Changes{
	setReference(reference) {
		this.reference = reference;
	}

	childAdded(callback){
		this.subscribe(eventType.child_added, callback);
	}

	childRemoved(callback){
		this.subscribe(eventType.child_removed, callback);
	}

	childChanged(callback){
		this.subscribe(eventType.child_changed, callback);
	}

	childMoved(callback){
		this.subscribe(eventType.child_moved, callback);
	}


	subscribe(eventType, callback){
		this.reference.on(eventType,callback)
	}


}

module.exports = Changes;
