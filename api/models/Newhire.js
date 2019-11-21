const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NewhireSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
        required: true,
        default: Date.now
    },
    status: {
        type: Array
    }
});

module.exports = Newhires = mongoose.model('newhires', NewhireSchema);
