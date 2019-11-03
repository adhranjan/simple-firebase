const fs = require('fs');
const camelCase = require('camelcase');
let models = {};

let include = (file)=>{
    let collection = require(`${__dirname}/models/${file}`);
    let [model] = file.split('.');
    models[camelCase(model)] = new collection();
};

fs.readdirSync(__dirname+'/models').forEach(file => {
    include(file);
});

module.exports = models
