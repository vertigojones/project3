require("dotenv").config();
const mongoose = require("mongoose");

// import models
const Drummer = require("../models/drummer");
const Equipment = require("../models/equipment");
const Gigs = require("../models/gigs");

// enable mongoose
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("open", () => {
  console.log("Successfully connected to mongoDB");
});
db.on("error", err => {
  console.log(err);
});

// set up the drummers (users)
const murph = new Drummer({
  image:
    "https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/26961716_10213935554650393_6166632945641644111_o.jpg?oh=8024a2fcdce57e782aab63eb95ca3d41&oe=5AFFA89A",
  name: "Murphy 'Meat Man' Potts",
  gender: "Male",
  age: 25,
  location: "Atlanta",
  instruments: ["Drums, Bongos, Triangle"],
  styles: ["Electronic, Rock, Pop, Serbian Folk"]
});

const cameron = new Drummer({
  image:
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/14962703_10155539168928636_4733508502386582906_n.jpg?oh=c494c3a2a7781b6c72a36c3624803a7b&oe=5B4C363B",
  name: "Cameron 'Animal' Gunter",
  gender: "Male",
  age: 25,
  location: "The Village",
  instruments: ["Drums, Percussion, Washboard"],
  styles: ["Hardcore, Screamo, Death Metal, Easy Listening"]
});

// set up the equipment

// set up the gigs
