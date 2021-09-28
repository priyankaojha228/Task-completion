const mongoose = require('mongoose')


const DataSchema = new mongoose.Schema({
    username: {type: String},
    userid: {type: String},

    id: {
        type: String
    },
    name: {
        type: String
    },
    company: {
        type: String
    },
    cost: {
        type: String
    }
   

})

module.exports = mongoose.model('UserDetails',DataSchema)