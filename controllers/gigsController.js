const express = require('express')
const router = express.Router({ mergeParams: true })
const Drummers = require('../models/drummers')
const Gigs = require('../models/gigs')

// show
router.get('/:id', (req, res) => {

    // find drummer from userId route param
    Drummers.findById(req.params.id).then((drummer) => {

        // Use the .id method to extract a single meat from attendee.meats
        const gig = drummer.gig.id(req.params.id)

        // connect it to a gig/show view
        res.render('/:id', {
            id: req.params.id,
            gig: gig,
            drummer: drummer
        })
    })
})

module.exports = router;
