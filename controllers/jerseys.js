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
    Jersey.create(req.body, (error, createdJersey) => {
        res.redirect('/jerseys');
    });
});

// Edit

// Show

// Export router
module.exports = router;