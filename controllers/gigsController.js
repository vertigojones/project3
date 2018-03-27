const express = require("express");
const router = express.Router({ mergeParams: true });

const Drummers = require("../models/drummers");
const Gigs = require("../models/gigs");

// show gig
router.get("/:id", (req, res) => {
  const gigId = req.params.id;
  const drummerId = req.params.drummerId;
  Drummers.findById(drummerId)
    .then(drummer => {
      const gig = drummer.gigs.id(gigId);
      res.json(gig);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create gig
router.post("/", (req, res) => {
  Drummers.findById(req.params.drummerId)
    .then(drummer => {
      const newGig = new Gigs({
        image: req.body.image,
        date: req.body.date,
        time: req.body.time,
        venue: req.body.venue,
        location: req.body.location,
        artist: req.body.artist,
        equipment: req.body.equipment,
        notes: req.body.notes
      });
      drummer.gigs.push(newGig);
      return drummer.save();
    })
    .then(savedDrummer => {
      res.send(savedDrummer);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// update gig
router.patch("/:id", (req, res) => {
  Drummers.findById(req.params.drummerId)
    .then(drummer => {
      const gigs = drummer.gigs.id(req.params.id);
        gigs.image = req.body.image,
        gigs.date = req.body.date,
        gigs.time = req.body.time,
        gigs.venue = req.body.venue,
        gigs.location = req.body.location,
        gigs.artist = req.body.artist,
        // gigs.equipment = req.body.equipment,
        gigs.notes = req.body.notes
      return drummer.save();
    })
    .then(savedDrummer => {
      res.send(savedDrummer);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// delete gig
router.delete("/:id", (req, res) => {
  Drummers.findById(req.params.drummerId)
    .then(drummer => {
      drummer.gigs.id(req.params.id).remove();
      return drummer.save();
    })
    .then(savedDrummer => {
      res.send(savedDrummer);
    });
});

module.exports = router;
