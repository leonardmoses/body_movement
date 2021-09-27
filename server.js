// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const PORT = 3000;
// =======================================
//              DATABASE
// =======================================
const mongoose = require("mongoose");
const DATABASE_URL =
	'process.env.MONGODB_URI';
const db = mongoose.connection;
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
// body parser middleware: creates req.body
app.use(express.urlencoded({ extended: false }));
// =======================================
//              ROUTES
// =======================================
// INDEX (get)


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