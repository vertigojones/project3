require("dotenv").config();
const mongoose = require("mongoose");

// import models
const Drummer = require("../models/drummers");
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
  image:
    "https://images-na.ssl-images-amazon.com/images/I/71Twc9ZMkOL._SL1500_.jpg",
  set: "Jazz set",
  cymbals: [
    '20" Zildjian sizzle ride, 15" Zildjian sizzle crash, 13" Zildjian Avedis hi-hats'
  ],
  drums: [
    '18" Gretsch Catalina kick drum, 14" Gretsch Catalina floor tom, 13" Gretsch Brooklyn steel snare'
  ],
  hardware: [
    "Hi-hat stand, Straight cymbal stand, Boom cymbal stand, Belt-driven kick pedal, Rock 'n' Sock throne, floor tom legs (X3)"
  ],
  other: [
    "Vic Firth 7A sticks, Stick bag, Drum bags, Flight case, Bottle of vodka"
  ]
});

const rockSet = new Equipment({
  image:
    "https://media.sweetwater.com/images/items/750/DRKT45A-large.jpg?v=77a13ff1d7d0c4c3",
  set: "Rock set",
  cymbals: [
    '22" Zildjian K ride, 18" Zildjian K crash, 16" Zildjian K crash, 14" Zildjian Quick-Beat hi-hats, 10" Zildjian K splash'
  ],
  drums: [
    '22" DW Artist Series kick drum, 18" DW Artist Series floor tom, 16" DW Artist Series floor tom, 13" DW Artist Series rack tom, 12" DW Artist Series rack tom, 14" DW Artist Series snare'
  ],
  hardware: [
    "Hi-hat stand, Straight cymbal stand, Boom cymbal stand (X2), splash clamp, Chain-driven kick pedal, Rock 'n' Sock throne, floor tom legs (X6)"
  ],
  other: [
    "Vic Firth 5B sticks, Stick Bag, Drum bags, Flight case, Six pack of beer"
  ]
});

const popSet = new Equipment({
  image:
    "https://2f9nwjerubq3js2g22m30fjx-wpengine.netdna-ssl.com/wp-content/uploads/2015/02/coll-fp-goldglass.jpg",
  set: "Pop set",
  cymbals: [
    '20" Zildjian sizzle ride, 18" Zildjian K crash, 15" Zildjian sizzle crash, 14" Zildjian Quick-Beat hi-hats, 10" Zildjian K splash'
  ],
  drums: [
    '22" DW Artist Series kick drum, 16" DW Artist Series floor tom, 12" DW Artist Series rack tom, 14" DW Artist Series snare, 10" Gretsch Brooklyn steel popcorn snare'
  ],
  hardware: [
    "Hi-hat stand, Straight cymbal stand, Boom cymbal stand (X2), splash clamp, Belt-driven kick pedal, Rock 'n' Sock throne, floor tom legs (X3), Roland SPD-SX drum pad + stand"
  ],
  other: [
    "Vic Firth 5A sticks, Stick Bag, Drum bags, Flight case, Cables, Power adapter, Headphones, Bottle of JD"
  ]
});

const folkSet = new Equipment({
  image:
    "https://i.pinimg.com/474x/0a/32/c0/0a32c051c1dc44942b1214215dc20825--the-farmer-drums.jpg",
  set: "Folk set",
  cymbals: ['18" Sabian Omni ride, 14" Zildjian Quick-Beat hi-hats'],
  drums: ['18" Gretsch Catalina kick drum, 13" Gretsch Brooklyn steel snare'],
  hardware: ["Boom cymbal stand, Belt-driven kick pedal, Rock 'n' Sock throne"],
  other: ["Vic Firth 5A sticks, Stick Bag, Six pack of craft beer"]
});

const triangle = new Equipment({
  image:
    "http://westmusic.cachefly.net/getDynamicImage.aspx?w=800&h=800&b=00ffffff&path=Sonor-LTR-15-Triangle-6.jpg",
  set: "Triangle",
  hardware: ["Triangle"],
  other: ["Clanger, Anti-anxiety medication"]
});

const congas = new Equipment({
  image:
    "http://westmusic.cachefly.net/getDynamicImage.aspx?w=800&h=800&b=00ffffff&path=Tycoon-Supremo-10-and-11-Conga-Set-Natural-with-Stand.jpg",
  set: "Congas",
  cymbals: ['10" Zildjian K splash'],
  drums: ["LP Percussion congas"],
  hardware: ["Congas stand, Splash clamp"],
  other: ["Hand percussion gloves, Congas cases, Bottle of tequilla"]
});

// set up the gigs
const mbs = new Gigs({
  image:
    "https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fblogs-images.forbes.com%2Fkeithflamer%2Ffiles%2F2017%2F08%2FMercedes-Benz-Stadium.jpg",
  date: "03-18-2018",
  time: "8:00",
  venue: "Mercedes-Benz Stadium",
  location: "Atlanta, GA",
  artist: "Metallica",
  equipment: [rockSet],
  notes: "Nothing to add!"
});

const eddiesAttic = new Gigs({
  image:
    "https://s-media-cache-ak0.pinimg.com/originals/fe/2f/4b/fe2f4be313585acd8250bddbb564e0cc.jpg",
  date: "03-19-2018",
  time: "9:00",
  venue: "Eddie's Attic",
  location: "Decatur, GA",
  artist: "Ceca",
  set: "Folk set",
  equipment: [folkSet],
  notes: "Also bring towel."
});

const tabernacle = new Gigs({
  image:
    "http://www.georgia.org/wp-content/uploads/2016/02/The-Tabernacle-Atlanta.jpg",
  date: "03-20-2018",
  time: "10:00",
  venue: "The Tabernacle",
  location: "Atlanta, GA",
  artist: "St Vincent",
  equipment: [popSet],
  notes: "Also bring dinner, this place has no food!"
});

const symphony = new Gigs({
  image: "https://media.timeout.com/images/101716821/630/472/image.jpg",
  date: "03-23-2018",
  time: "2:00",
  venue: "Atlanta Symphony Hall",
  location: "Atlanta, GA",
  artist: "ASO",
  equipment: [triangle],
  notes: "Make sure to not be late!"
});

const fourSeasons = new Gigs({
  image:
    "https://cdn.kiwicollection.com/media/property/PR000773/xl/000773-01-lobby.jpg",
  date: "03-25-2018",
  time: "5:00",
  venue: "Four Seasons",
  location: "Atlanta, GA",
  artist: "Boz Scaggs Jazz Trio",
  equipment: [jazzSet],
  notes: "Park out back. Also bring water bottle. And spare snare."
});

const fortyWatt = new Gigs({
  image:
    "https://img.wennermedia.com/920-width/rs-138811-20130335-40watt-x306-1364239065.jpg",
  date: "04-03-2018",
  time: "10:00",
  venue: "40 Watt Club",
  location: "Athens, GA",
  artist: "Caribbean Steel",
  equipment: [congas],
  notes: "Also bring margherita mix!!! And towel."
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
  styles: ["Electronic, Rock, Pop, Serbian Folk"],
  profile: "Hi, I'm Murph and I tear this thing up. Drums, that is. I can play anything. All I need is a good meat-filled breakfast and I'm good to go for the rest of the day. I like to drum. Drums is my life. Did I say that I like drums? Hire me. You won't be disappointed.",
  gigs: [eddiesAttic, tabernacle, symphony]
});

const cameron = new Drummer({
  image:
    "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/14962703_10155539168928636_4733508502386582906_n.jpg?oh=c494c3a2a7781b6c72a36c3624803a7b&oe=5B4C363B",
  name: "Cameron 'Animal' Gunter",
  gender: "Male",
  age: 25,
  location: "The Village",
  instruments: ["Drums, Percussion, Washboard"],
  styles: ["Hardcore, Screamo, Latin, Easy Listening"],
  profile: "I have been playing for five years now, mostly in the Atlanta area. My styles range across the board, as I love all kinds of music. My clients so far have included Metallica (when Lars needs a break), Queen, The King, Jay-Z, OutKast, The Transiberian Orchestra, Grease: The Musical, and The Nutcracker. If you need a versatlie musician for your group or act, then look no further than this guy!",
  gigs: [mbs, fourSeasons, fortyWatt]
});

// remove all Equipment
Equipment.remove()
  .then(() => {
    // then remove all Gigs
    Gigs.remove();
  })
  .then(() => {
    // then remove all Drummers and save to DB
    return Drummer.remove();
  })
  .then(() => {
    return Drummer.insertMany([murph, cameron]);
  })
  .then(() => {
    // close the database
    console.log("Keep the beats alive!");
    db.close();
  })
  .catch(err => {
    // if there are any errors, log it and then close the db
    console.log(err);
    db.close();
  });
