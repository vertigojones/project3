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

// new gig
router.post("/:id", (req, res) => {
  Drummers.findById(req.params.id)
    .then(user => {
      const newGig = new Gigs({});
      drummer.gig.push(newGig);
      return drummer.save();
    })
    .then(saveDrummer => {
      res.send(savedDrummer);
    });
});

// delete gig
router.delete("/:id", (req, res) => {
  Drummers.findById(req.params.id)
    .then(user => {
      drummer.gigs.id(req.params.id).remove();
      return drummer.save();
    })
    .then(savedDrummer => {
      res.send(savedDrummer);
    });
});

module.exports = router;
