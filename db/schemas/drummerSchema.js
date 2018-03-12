const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const drummerSchema = require("./drummerSchema");
const gigSchema = require("./gigSchema")

mongoose.Promise = global.Promise;

const drummerSchema = new Schema({
  image: String,
  name: String,
  gender: String,
  age: Number,
  location: String,
  instruments: [],
  styles: [],
  gigs: [ gigSchema ]
});

module.exports = drummerSchema;
