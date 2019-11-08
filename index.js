/*
* Access collection object by using camelCase of the filename via require('./collection/index')
* or you can directly create your own object of the model
* * */
const users = require('./collection/index').user;

for (let i = 1; i <= 100; i++) {
    users.add(i, {
        location: {
            lat: i,
            lng: i
        },
        name: Math.random()
    });
    users.remove(i);
}
