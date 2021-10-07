// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// =======================================
//              DATABASE
// =======================================
// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
// =======================================
//              MODELS
// =======================================
/* Models moved to controller */
// =======================================
//              MIDDLEWARE
// =======================================
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride("_method"));
// =======================================
//              ROUTES
// =======================================
const controller1 = require("./controllers/controller1.js");
app.use("" , controller1);

// INDEX (get)


// NEW (get)


// DESTROY (delete)


// UPDATE (put)


// CREATE (post)


// EDIT (get) (put)


// SHOW (get)


// =======================================
//              LISTENER
// =======================================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));