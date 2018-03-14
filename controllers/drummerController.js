const express = require("express");
const router = express.Router();

const Drummers = require("../models/drummers");

// index
router.get("/", async (req, res) => {
  try {
    const drummers = await Drummers.find({});
    res.json(drummers);
  } catch (err) {
    console.log(err);
  }
});

// get drummer by id
router.get("/:id", async (req, res) => {
  try {
    const drummerId = req.params.id;
    const drummer = await Drummers.findById(drummerId);
    res.json(drummer);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// create new drummer
router.post("/", async (req, res) => {
  try {
    const newDrummer = req.body;
    const savedDrummer = await Drummers.create(newDrummer);
    res.json(savedDrummer);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update drummer
router.put("/:id", async (req, res) => {
  try {
    const drummerId = req.params.id;
    const updatedDrummer = req.body;
    const savedDrummer = await Drummers.findByIdAndUpdate(
      drummerId,
      updatedDrummer,
      {new: true}
    );
    res.json(savedDrummer);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete creature
router.delete("/:id", async (req, res) => {
  try {
    const drummerId = req.params.id;
    await Drummers.findByIdAndRemove(drummerId);
    res.json({
      msg: "Successfully Deleted"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
