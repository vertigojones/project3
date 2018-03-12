const mongoose = require('mongoose')
const equipmentSchema = require('../db/schemas/eqipmentSchema')

// convert schema into mongoose model and export
const Equipment = mongoose.model('equipment', equipmentSchema)

module.exports = Equipment