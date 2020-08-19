const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const jerseySchema = new Schema({
    name: { type: String, required: true },
    team: { type: String, required: true },
    number: {type: Number, required: true},
    purchasePrice: {type: Number, required: true}
});

// Create Model from our Schema
const Jersey = mongoose.model('Jersey', jerseySchema);

// Export Log Model
module.exports = Jersey;