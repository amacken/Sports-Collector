const express = require('express');
const router = express.Router();
const Ball = require('../models/balls.js');

// Add routes
// Index
router.get('/', (req, res) => {
    Ball.find({}, (error, allBalls) => {
        res.render('balls/Index', {
            balls: allBalls
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