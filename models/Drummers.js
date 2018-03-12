const mongoose = require('mongoose')
const drummerSchema = require('../db/schemas/drummerSchema')

// convert schema into mongoose model and export
const Drummer = mongoose.model('Drummer', drummerSchema)

module.exports = Drummer