const express = require("express");
const router = express.Router();
const Drummers = require("../models/drummers");

// INDEX
router.get("/", (req, res) => {
  // get all drummers
  Drummers.find().then(user => {
    // send all drummers to homepage
    res.send(user)   
  });
});

// NEW
router.get("/new", (req, res) => {
  res.render("drummer/new");
});

// CREATE
router.post("/", (req, res) => {
  const newDrummer = new Drummers({
    image: req.body.image,
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    location: req.body.location,
    instruments: req.body.instruments,
    styles: req.body.styles,
    gigs: req.body.gigs
  });

  // save the new drummer
  newDrummer
    .save()
    .then(savedDrummer => {
      // redirect to the new meat user page
      res.redirect(`/drummer/${savedDrummer._id}`);
    })
    .catch(err => {
      console.log(err);
    });
});

// SHOW
router.get("/:id", (req, res) => {
  // find a single drummer
  MeatUser.findById(req.params.id).then(attendee => {
    // render that into a handlebars view and pass the meast user from our db into hbs
    res.render("drummer/show", {
      attendee: attendee
    });
  });
});

// EDIT
router.get("/:id/edit", (req, res) => {
  // find a single meat user using the route params above
  MeatUser.findById(req.params.id).then(attendee => {
    // render into a handlebars view and pass the meat user from our db into hbs
    res.render("user/edit", {
      image: req.body.image,
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      hobbies: req.body.hobbies,
      meat: req.body.meat,
      preparation: req.body.preparation,
      side: req.body.side,
      attendee: attendee
    });
  });
});

// UPDATE
router.patch("/:id", (req, res) => {
  // use the route params and form data to update the meat user
  MeatUser.findByIdAndUpdate(
    req.params.id,
    {
      image: req.body.image,
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      hobbies: req.body.hobbies,
      meat: req.body.meat,
      preparation: req.body.preparation,
      side: req.body.side
    },
    { new: true }
  ).then(updatedMeatUser => {
    // redirect to the show page once it successfully updates
    res.redirect(`/users/${updatedMeatUser._id}`);
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  // use the params id to find and remove the meat user
  MeatUser.findByIdAndRemove(req.params.id).then(() => {
    res.redirect(`/users`);
  });
});

module.exports = router;
