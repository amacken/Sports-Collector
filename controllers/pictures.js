const express = require('express');
const router = express.Router();
const Picture = require('../models/pictures.js');

// Add Routes
// Index
router.get('/', (req, res) => {
    Picture.find({}, (error, allPictures) => {
        res.render('pictures/Index', {
            pictures: allPictures
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