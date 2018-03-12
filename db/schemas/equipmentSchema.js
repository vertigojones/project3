const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const equipmentSchema = require("./equipmentSchema");
mongoose.Promise = global.Promise;

const equipmentSchema = new Schema({
  cymbals: [],
  drums: [],
  hardware: [],
  other: []
});

module.exports = equipmentSchema;
