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
        set: req.body.set,
        equipment: req.body.equipment
      });
      drummer.gigs.push(newGig);
      return drummer.save();
    })
    .then(savedDrummer => {
      res.send(savedDrummer);
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
