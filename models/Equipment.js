const mongoose = require('mongoose')
const equipmentSchema = require('../db/schemas/equipmentSchema')

// convert schema into mongoose model and export
const Equipment = mongoose.model('equipment', equipmentSchema)

module.exports = Equipment