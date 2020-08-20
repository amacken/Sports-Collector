require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const PORT = process.env.PORT||3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const mongoURI = process.env.MONGO_URI;

// Mongoose connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
});

// Controller
const jerseysController = require('./controllers/jerseys.js');
app.use('/jerseys', jerseysController);

app.get('/', (req, res) => {
    res.redirect('/jerseys');
});

// Listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});