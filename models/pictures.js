const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const pictureSchema = new Schema({
    name: { type: String, required: true },
    team: { type: String, required: true },
    number: {type: Number, required: true},
    purchasePrice: {type: Number, required: true},
    hallOfFamer: {type: Boolean, required: true},
    isFramed: {type: Boolean, required: true},
    certificationNumber: {type: String, required: true},
    img: {type: String, required: false } 
});

// Create Model from our Schema
const Picture = mongoose.model('Picture', pictureSchema);

// Export Log Model
module.exports = Picture;