const express = require('express');
const router = express.Router();
const Bobblehead = require('../models/bobbleheads.js');

// Add routes
// Index
router.get('/', (req, res) => {
    Bobblehead.find({}, (error, allBobbleheads) => {
        res.render('bobbleheads/Index', {
            bobblheads: allBobbleheads
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