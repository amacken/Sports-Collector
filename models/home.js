const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const homeSchema = new Schema({
    
});

// Create Model from our Schema
const Home = mongoose.model('Home', homeSchema);

// Export Log Model
module.exports = Home;