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
router.get('/new', (req, res) => {
    res.render('cards/New')
});

// Delete

// Update
router.put('/:id', (req, res) => {
    req.body.hallOfFamer = req.body.hallOfFamer === "on" ? true : false;
    Card.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/cards');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.hallOfFamer === "on") {
        req.body.hallOfFamer = true;
    } else {
        req.body.hallOfFamer = false;
    }
    Card.create(req.body, (error, createdCard) => {
        if (error) {
            console.log('error', error)
        } else {
            res.redirect('/cards');
        }
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Card.findById(req.params.id, (error, foundCard) => {
        res.render('cards/Edit', {
            card: foundCard
        });
    });
});

// Show
router.get('/:id', (req, res) => {
    Card.findById(req.params.id, (error, foundCard) => {
        res.render('cards/Show', {
            card: foundCard
        });
    });
});


// Export router
module.exports = router;