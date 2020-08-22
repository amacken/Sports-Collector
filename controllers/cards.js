const express = require('express');
const router = express.Router();
const Card = require('../models/cards.js');

// Add Routes
// Index
router.get('/', (req, res) => {
    Card.find({}, (error, allCards) => {
        res.render('cards/Index', {
            cards: allCards
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