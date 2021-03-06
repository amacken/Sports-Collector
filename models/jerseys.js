const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const jerseySchema = new Schema({
    name: { type: String, required: true },
    sport: { type: String, required: true},
    team: { type: String, required: true },
    number: {type: Number, required: true},
    purchasePrice: {type: Number, required: true},
    hallOfFamer: {type: Boolean, required: true},
    isFramed: {type: Boolean, required: true},
    certificationNumber: {type: String, required: true},
    img: {type: String, required: false } 
});

// Create Model from our Schema
const Jersey = mongoose.model('Jersey', jerseySchema);

// Export Log Model
module.exports = Jersey;