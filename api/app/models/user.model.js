
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true},
});
// Exportar o modelo
module.exports = mongoose.model('User', UserSchema);    