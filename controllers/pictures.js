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
router.delete('/:id', (req, res) => {
    Picture.findByIdAndRemove(req.params.id, (error, picture) => {
        res.redirect('/pictures');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.hallOfFamer = req.body.hallOfFamer === "on" ? true : false;
    Picture.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/pictures');
    });
});

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
router.get('/:id/edit', (req, res) => {
    Picture.findById(req.params.id, (error, foundPicture) => {
        res.render('pictures/Edit', {
            picture: foundPicture
        });
    });
});

// Show
router.get('/:id', (req, res) => {
    Picture.findById(req.params.id, (error, foundPicture) => {
        res.render('pictures/Show', {
            picture: foundPicture
        });
    });
});


// Export router
module.exports = router;