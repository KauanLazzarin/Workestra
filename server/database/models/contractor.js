const mongoose = require('mongoose');

const ContractorSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    vacancy: {
        required: true,
        type: String
    },

    acting: {
        required: true,
        type: String
    },

    number: {
        required: true,
        type: Number
    },

    salary: {
        required: true,
        type: Number
    },

    details: {
        required: true,
        type: String
    },

    createdAt: {
        required: true,
        type: Date,
        default: Date.now()
    }

});

mongoose.model('Contractor', ContractorSchema);
