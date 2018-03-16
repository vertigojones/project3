// dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const drummerController = require('./controllers/drummerController')
const gigsController = require('./controllers/gigsController')
//const equipmentController = require('./controllers/equipmentController')

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on("error", err => {
  console.log(err);
});

db.on("open", () => {
  console.log("Connected to MongoDB");
});

// middleware
app.use(logger("dev"));

app.use(express.static(`${__dirname}/client/build`));
app.use(bodyParser.json());

// set up routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/drummer', drummerController)
app.use('/api/drummer/:drummerId/gigs', gigsController)
//app.use('/api/drummer/:drummerId/gigs/:gigId/equipment', equipmentController)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
});

// set up port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Laying down beats on PORT 3001");
});
