const mongoose = require('mongoose')
const gigSchema = require('../db/schemas/gigSchema')

// convert schema into mongoose model and export
const Gigs = mongoose.model('gigs', gigSchema)

module.exports = Gigs