const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 999,
        select: false
    },
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
    adm: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("User", UserSchema);