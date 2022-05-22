const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {type: string , required: true},
    descrição: string
})

const HomeModel = mongoose.model('Home',HomeSchema)

module.exports = HomeModel