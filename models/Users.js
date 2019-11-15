const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
        required: 'role is required'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = Users = mongoose.model('users', UserSchema);