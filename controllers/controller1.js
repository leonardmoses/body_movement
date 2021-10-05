// =======================================
//        CONTROLLER DEPENDENCIES
// =======================================
const express = require('express');
// const { appendFile } = require('fs');
// Use this var in place of app.method for controller routes
const controller1 = express.Router();
// =======================================
//              MODELS
// =======================================
// Import model into controller
// This will be the Database Object
const UserRoutine = require('../models/schema-model.js')
// =======================================
//           CONTROLLER ROUTES
// =======================================
// SEED
const preset_routine = require('../models/preset-workout.js');

// controller1.get('/seed', (req, res) => {
// 	UserRoutine.deleteMany({}, (error, exercises) => {});

// 	UserRoutine.create(preset_routine, (error, data) => {
// 		res.redirect('/index');
// 	});
// });

// INDEX (get)
// controller1.get('/' , (req,res) => { /* Test route to index */
//     res.render('index.ejs' , {preset_routine: preset_routine});
// })

controller1.get('/' , (req,res) => { /* Test route to index */
    res.render('index.ejs');
})

// NEW (get)
controller1.get('/new' , (req,res) => { 
    res.render('new.ejs' );
})

// DESTROY (delete)


// UPDATE (put)
controller1.put('/show_personal/remove_set' , (req ,res) => {
    
	UserRoutine.findOneAndUpdate(req.body.sets, {$inc:{qty:-1}}, {
		new: true
}, (error, updatedProduct) => {
		res.redirect(`/index/show_personal`);
	});
});

// CREATE (post)
controller1.post("/", (req, res) => {
    UserRoutine.create(req.body, (error, createdWorkout) => {
        res.redirect("/index/show_personal");
    });
});

// EDIT (get) (put)
// controller1.get('/edit' , (req,res) => { /* Test route to edit */
//     res.render('edit.ejs');
// })

// SHOW (get)
controller1.get('/show_preset' , (req,res) => { 
    res.render('show_preset.ejs' , {preset_routine: preset_routine});
})


controller1.get('/show_personal' , (req,res) => {
    UserRoutine.find({}, (error, allworkouts) => {
        res.render('show_personal.ejs', {workouts: allworkouts});
    });
});


// =======================================
//         CONTROLLER EXPORT
// =======================================
// Export controller to server
module.exports = controller1;
