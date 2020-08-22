const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const miscItemSchema = new Schema({
    name: { type: String, required: true },
    sport: { type: String, required: true},
    team: { type: String, required: false },
    number: {type: Number, required: false},
    purchasePrice: {type: Number, required: false},
    hallOfFamer: {type: Boolean, required: true},
    isFramed: {type: Boolean, required: true},
    certificationNumber: {type: String, required: false},
    img: {type: String, required: false } 
});

// Create Model from our Schema
const MiscItem = mongoose.model('MiscItem', miscItemSchema);

// Export Log Model
module.exports = MiscItem;