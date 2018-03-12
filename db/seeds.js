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

// set up the equipment
const jazzSet = new Equipment({
  cymbals: [
    '20" Zildjian sizzle ride, 15" Zildjian sizzle crash, 13" Zildjian Avedis hi-hats'
  ],
  drums: [
    '18" Gretsch Catalina kick drum, 14" Gretsch Catalina floor tom, 13" Gretsch Brooklyn steel snare'
  ],
  hardware: [
    "Hi-hat stand, Straight cymbal stand, Boom cymbal stand, Belt-driven kick pedal, Rock 'n' Sock throne"
  ],
  other: [
    "Vic Firth 7A sticks, Stick bag, Drum bags, Flight case, Bottle of vodka"
  ]
});

const rockSet = new Equipment({
  cymbals: [
    '22" Zildjian K ride, 18" Zildjian K crash, 16" Zildjian K crash, 14" Zildjian Quick-Beat hi-hats, 10" Zildjian K splash'
  ],
  drums: [ ''],
  hardware: [],
  other: []
});

// set up the gigs

// set up the drummers (users)
const murph = new Drummer({
  image:
    "https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/26961716_10213935554650393_6166632945641644111_o.jpg?oh=8024a2fcdce57e782aab63eb95ca3d41&oe=5AFFA89A",
  name: "Murphy 'Meat Man' Potts",
  gender: "Male",
  age: 25,
  location: "Atlanta",
  instruments: ["Drums, Bongos, Triangle"],
  styles: ["Electronic, Rock, Pop, Serbian Folk"],
  gigs: []
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
