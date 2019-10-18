const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const newhireSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    UIN: {
        type: String,
        required: true
    },
    supervisorName: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = newhire = mongoose.model('newhire', newhireSchema);