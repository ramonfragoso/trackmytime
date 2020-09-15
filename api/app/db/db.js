const mongoose = require('mongoose');
const config = require('../config/config.js');


module.exports = {
    init() {
        mongoose.connect(config.database.url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Successfully connected to the database");
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        })
    }
}