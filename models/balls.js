const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ballSchema = new Schema({
    name: { type: String, required: true },
    sport: { type: String, required: true },
    purchasePrice: {type: Number, required: false},
    hallOfFamer: {type: Boolean, required: true},
    certificationNumber: {type: String, required: false},
    img: {type: String, required: false } 
});

// Create Model from our Schema
const Ball = mongoose.model('Ball', ballSchema);

// Export Log Model
module.exports = Ball;