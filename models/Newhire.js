const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NewhireSchema = new Schema({
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
    },
    status: {
        type: Array
    }
});

module.exports = Newhire = mongoose.model('newhires', NewhireSchema);