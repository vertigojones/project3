const express = require('express')
const router = express.Router({ mergeParams: true })
const Drummers = require('../models/drummers')
const Gigs = require('../models/gigs')

// index
router.get('/:id', (req, res) => {
    // find drummer by id
    Drummers.findById(req.params.id).then((drummer) => {
        console.log(drummer)
        // pass all gigs and drummers
        const gigs = drummer.gigs
        res.send( {
            drummer: drummer,
            gigs: gigs
        })
    })
})

module.exports = router;
