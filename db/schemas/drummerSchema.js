const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const drummerSchema = require("./drummerSchema");
mongoose.Promise = global.Promise;

const drummerSchema = new Schema({
  image: String,
  name: String,
  gender: String,
  age: Number,
  location: String,
  instruments: [],
  styles: []
});

module.exports = drummerSchema;
