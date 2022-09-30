const mongoose = require('mongoose')

const typeSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Tipo', typeSchema)