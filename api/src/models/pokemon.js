const mongoose = require('mongoose')

const pokeSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    vida: {
        type: Number,
        require: true
    },
    ataque: {
        type: Number,
        require: true
    },
    defensa: {
        type: Number,
        require: true
    },
    velocidad: {
        type: String,
        require: true
    },
    altura: {
        type: Number,
        require: true
    },
    peso: {
        type: Number,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    types:{
        type : Array,
        require: true
    }
})

module.exports = mongoose.model('Pokemon', pokeSchema)