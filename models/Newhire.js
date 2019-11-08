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
        default: Date.now
    },
    status: {
        type: Array
    }
});

const User = new Schema({
    username: {
        type: String,
        required: 'username is required'
    },
    password: {
        type: String,
        required: 'password is required'
    },
    auth: {
        //true = HR, false = everyone else
        type: Boolean,
        required: 'role selection is required'
    }
});

module.exports = Newhire = mongoose.model('newhires', NewhireSchema);
module.exports = Users = mongoose.model('users', User);