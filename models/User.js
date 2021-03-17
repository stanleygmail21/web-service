const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true, 'User must have a name']
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;