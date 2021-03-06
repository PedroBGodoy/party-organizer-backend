const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const EventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    duration: Number,
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model("Event", EventSchema);