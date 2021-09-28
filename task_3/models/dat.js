const mongoose = require('mongoose')


const DataSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('UserDetails',DataSchema)