const express = require('express');
const router = express.Router();
const MiscItem = require('../models/miscItems.js');

// Add Routes
// Index
router.get('/', (req, res) => {
    MiscItem.find({}, (error, allMiscItems) => {
        res.render('miscItems/Index', {
            miscItems: allMiscItems
        });
    })
});

// New

// Delete

// Update

// Create

// Edit

// Show


// Export router
module.exports = router;