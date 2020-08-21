const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ballSchema = new Schema({
    name: { type: String, required: true },
    purchasePrice: {type: Number, required: true},
    hallOfFamer: {type: Boolean, required: true},
    certificationNumber: {type: String, required: true},
    img: {type: String, required: false } 
});

// Create Model from our Schema
const Ball = mongoose.model('Ball', ballSchema);

// Export Log Model
module.exports = Ball;