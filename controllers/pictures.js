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
router.get('/new', (req, res) => {
    res.render('pictures/New')
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
    Picture.create(req.body, (error, createdPicture) => {
        if (error) {
            console.log('error', error)
        } else {
            res.redirect('/pictures');
        }
    });
});

// Edit

// Show


// Export router
module.exports = router;