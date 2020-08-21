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
router.get('/new', (req, res) => {
    res.render('balls/New')
});

// Delete

// Update
router.put('/:id', (req, res) => {
    req.body.hallOfFamer = req.body.hallOfFamer === "on" ? true : false;
    Ball.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/balls');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.hallOfFamer === "on") {
        req.body.hallOfFamer = true;
    } else {
        req.body.hallOfFamer = false;
    }
    Ball.create(req.body, (error, createdBall) => {
        if (error) {
            console.log('error', error)
        } else {
            res.redirect('/balls');
        }
    });
});

// Edit

// Show


// Export router
module.exports = router;