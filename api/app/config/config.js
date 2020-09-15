const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: (process.env.PORT || 5000),
    database: {
        url: process.env.MONGO_URL 
    }
}