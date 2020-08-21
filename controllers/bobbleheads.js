const express = require('express');
const router = express.Router();
const Bobblehead = require('../models/bobbleheads.js');

// Add routes
// Index
router.get('/', (req, res) => {
    Bobblehead.find({}, (error, allBobbleheads) => {
        res.render('bobbleheads/Index', {
            bobbleheads: allBobbleheads
        });
    })
});

// New
router.get('/new', (req, res) => {
    res.render('bobbleheads/New')
});

// Delete
router.delete('/:id', (req, res) => {
    Bobblehead.findByIdAndRemove(req.params.id, (error, bobblehead) => {
        res.redirect('/bobbleheads');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.hallOfFamer = req.body.hallOfFamer === "on" ? true : false;
    Bobblehead.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/bobbleheads');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.hallOfFamer === "on") {
        req.body.hallOfFamer = true;
    } else {
        req.body.hallOfFamer = false;
    }
    Bobblehead.create(req.body, (error, createdBobblehead) => {
        if (error) {
            console.log('error', error)
        } else {
            res.redirect('/bobbleheads');
        }
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Bobblehead.findById(req.params.id, (error, foundBobblehead) => {
        res.render('bobbleheads/Edit', {
            bobblehead: foundBobblehead
        });
    });
});

// Show
router.get('/:id', (req, res) => {
    Bobblehead.findById(req.params.id, (error, foundBobblehead) => {
        res.render('bobbleheads/Show', {
            bobblehead: foundBobblehead
        });
    });
});


// Export router
module.exports = router;