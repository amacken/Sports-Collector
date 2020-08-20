const express = require('express');
const router = express.Router();
const Jersey = require('../models/jerseys.js');

// Add routes
// Index
router.get('/', (req, res) => {
    Jersey.find({}, (error, allJerseys) => {
        res.render('jerseys/Index', {
            jerseys: allJerseys
        });
    })
});

// New
router.get('/new', (req, res) => {
    res.render('jerseys/New')
});

// Delete
router.delete('/:id', (req, res) => {
    Jersey.findByIdAndRemove(req.params.id, (error, jersey) => {
        res.redirect('/jerseys');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.hallOfFamer = req.body.hallOfFamer === "on" ? true : false;
    Jersey.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/jerseys');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.hallOfFamer === "on") {
        req.body.hallOfFamer = true;
    } else {
        req.body.hallOfFamer = false;
    }
    Jersey.create(req.body, (error, createdJersey) => {
        res.redirect('/jerseys');
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Jersey.findById(req.params.id, (error, foundJersey) => {
        res.render('jerseys/Edit', {
            jersey: foundJersey
        });
    });
});

// Show
router.get('/:id', (req, res) => {
    Jersey.findById(req.params.id, (error, foundJersey) => {
        res.render('jerseys/Show', {
            jersey: foundJersey
        });
    });
});

// Export router
module.exports = router;