const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const equipmentSchema = new Schema({
  set: String,
  cymbals: [],
  drums: [],
  hardware: [],
  other: []
});

module.exports = equipmentSchema;
