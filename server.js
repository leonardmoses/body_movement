// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require ('mongoose');
const app = express();
const db = mongoose.connection;
// const PORT = 3000;
const PORT = process.env.PORT || 3000;
// =======================================
//              DATABASE
// =======================================
const DATABASE_URL = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose.connect(DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Database Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
// =======================================
//              MODELS
// =======================================

// =======================================
//              MIDDLEWARE
// =======================================
//use public folder for static assets
app.use(express.static('public'));

// body parser middleware: creates req.body
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
// =======================================
//              ROUTES
// =======================================
// INDEX (get)
app.get('/' , (req, res) => { /*test route*/
	res.send('Hello World!');
  });


// NEW (get)


// DESTROY (delete)


// UPDATE (put)


// CREATE (post)


//EDIT (get) (put)


// SHOW (get)


// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));