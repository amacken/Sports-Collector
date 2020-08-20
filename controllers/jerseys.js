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

// Update

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