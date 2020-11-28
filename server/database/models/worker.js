const mongoose =  require('mongoose');

const WorkerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    acting: {
        type: String,
        required: true
    },

    time: {
        type: Number,
        required: true
    },

    number: {
        type: Number,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

mongoose.model('Worker', WorkerSchema);