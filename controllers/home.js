const express = require('express');
const router = express.Router();
const Home = require('../models/home.js');

// Add Routes
// Index
router.get('/', (req, res) => {
    Home.find({}, (error, allHome) => {
        res.render('home/Index', {
            home: allHome
        });
    })
});


// Export router
module.exports = router;