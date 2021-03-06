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
router.get('/new', (req, res) => {
    res.render('miscItems/New')
});

// Delete
router.delete('/:id', (req, res) => {
    MiscItem.findByIdAndRemove(req.params.id, (error, miscItem) => {
        res.redirect('/miscItems');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.hallOfFamer = req.body.hallOfFamer === "on" ? true : false;
    req.body.isFramed = req.body.isFramed === "on" ? true : false;
    MiscItem.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/miscItems');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.hallOfFamer === "on") {
        req.body.hallOfFamer = true;
    } else {
        req.body.hallOfFamer = false;
    }
    if (req.body.isFramed === "on") {
        req.body.isFramed = true;
    } else {
        req.body.isFramed = false;
    }
    MiscItem.create(req.body, (error, createdMiscItem) => {
        if (error) {
            console.log('error', error)
        } else {
            res.redirect('/miscItems');
        }
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    MiscItem.findById(req.params.id, (error, foundMiscItem) => {
        res.render('miscItems/Edit', {
            miscItem: foundMiscItem
        });
    });
});

// Show
router.get('/:id', (req, res) => {
    MiscItem.findById(req.params.id, (error, foundMiscItem) => {
        res.render('miscItems/Show', {
            miscItem: foundMiscItem
        });
    });
});


// Export router
module.exports = router;