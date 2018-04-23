const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gigSchema = require("./gigSchema");

mongoose.Promise = global.Promise;

const drummerSchema = new Schema({
  image: String,
  name: String,
  gender: String,
  age: Number,
  location: String,
  instruments: [],
  styles: [],
  profile: String,
  gigs: [gigSchema]
});

module.exports = drummerSchema;
