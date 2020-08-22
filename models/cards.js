const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const cardSchema = new Schema({
    name: { type: String, required: true },
    sport: { type: String, required: true},
    team: { type: String, required: true },
    number: {type: Number, required: true},
    purchasePrice: {type: Number, required: false},
    hallOfFamer: {type: Boolean, required: true},
    certificationNumber: {type: String, required: false},
    img: {type: String, required: false } 
});

// Create Model from our Schema
const Card = mongoose.model('Card', cardSchema);

// Export Log Model
module.exports = Card;