const mongoose = require('mongoose')
const Schema = mongoose.Schema
const equipmentSchema = require('./equipmentSchema')
mongoose.Promise = global.Promise

const gigSchema = new Schema ({
    image: String,
    date: String,
    time: String,
    venue: String,
    location: String,
    artist: String,
    equipment: [ equipmentSchema ],
    notes: String
})

module.exports = gigSchema