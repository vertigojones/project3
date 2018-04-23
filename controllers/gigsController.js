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
router.put("/:id", (req, res) => {
  Drummers.findById(req.params.drummerId)
    .then(drummer => {
      const gigs = drummer.gigs.id(req.params.id);
      if (req.body.image) {
        gigs.image = req.body.image;
      }
      if (req.body.date) {
        gigs.date = req.body.date;
      }
      if (req.body.time) {
        gigs.time = req.body.time;
      }
      if (req.body.venue) {
        gigs.venue = req.body.venue;
      }
      if (req.body.location) {
        gigs.location = req.body.location;
      }
      if (req.body.artist) {
        gigs.artist = req.body.artist;
      }
      if (req.body.notes) {
        gigs.notes = req.body.notes;
      }
    })
    .then(savedDrummer => {
      res.send(savedDrummer);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.put("/:id", async (req, res) => {
  try {
    const gigId = req.params.id;
    const updatedGig = req.body;
    const savedDrummer = await Drummers.findOneAndUpdate(
      drummerId,
      updatedDrummer,
      { new: true }
    );
    res.json(savedDrummer);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
