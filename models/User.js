const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        required:[true, 'A user must have a name'],
    },

    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
      },

    // photo: String,

    role: {
        type: String,
        required:[true, 'A user must have a name'],
        enum: {
            values: ['user', 'guide', 'lead-guide', 'admin'],
            message: 'A user can either be a regular user, guide, lead-guide or admin'
        },
        default: 'user'
    },

    password: {
        type: String,
        required:[true, 'A user must have a password'],
        minlength: 8,
        select: false
        
    },

    passwordConfirm: {
        type: String,
        required:[true, 'A user must have confirm their password'],
        validate:{
            validator: function(el){ return this.password === el },
            message: 'passwords are not thesame'
        }
    },
})

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;