const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const bobbleheadSchema = new Schema({
    name: { type: String, required: true },
    sport: { type: String, required: true},
    team: { type: String, required: true },
    number: {type: Number, required: true},
    hallOfFamer: {type: Boolean, required: true},
    img: {type: String, required: false } 
});

// Create Model from our Schema
const Bobblehead = mongoose.model('Bobblehead', bobbleheadSchema);

// Export Log Model
module.exports = Bobblehead;