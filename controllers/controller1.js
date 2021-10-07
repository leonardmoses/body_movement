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
controller1.get('/index/new' , (req,res) => { 
    res.render('new.ejs' );
})

// DESTROY (delete)
controller1.delete('/index/show_personal/:id', (req, res) => {
    UserRoutine.findByIdAndRemove(req.params.id, (err, data) => {
    // res.send('deleting...'); /* testing delete route */
    res.redirect('/index/show_personal');
    });
});


// UPDATE (put)
    //Manual Editing
controller1.put('/index/show_personal/edit/:id', (req, res) => {  
	UserRoutine.findByIdAndUpdate(req.params.id, req.body , {new: true}, 
        (error, updatedWorkout) => {
        console.log(updatedWorkout)
        res.redirect(`/index/show_personal`);
    });
    // UserRoutine.findByIdAndUpdate(req.params.id, req.body)
    // .then((updatedWorkout) => {
    //     console.log(updatedWorkout)
    //     res.redirect(`/index/show_personal`);
    // })
});

    //Adding a Set
controller1.put('/index/show_personal/add/:id' , (req ,res) => {
    
	UserRoutine.findByIdAndUpdate(req.params.id, {$inc:{sets:+1}}, {new: true}, (error, updatedWorkout) => {
        console.log(req.params.id)
		res.redirect('/index/show_personal');
	});
});
    //Removing a Set
controller1.put('/index/show_personal/remove/:id' , (req ,res) => {
    
	UserRoutine.findByIdAndUpdate(req.params.id, {$inc:{sets:-1}}, {new: true}, (error, updatedWorkout) => {
        console.log(req.params.id)
		res.redirect('/index/show_personal');
	});
});


// CREATE (post)
controller1.post("/index/", (req, res) => {
    UserRoutine.create(req.body, (error, createdWorkout) => {
        res.redirect("/index/show_personal");
    });
});

// EDIT (get) (put)
controller1.get('/index/edit_personal' , (req,res) => { /* Test route to edit */
    UserRoutine.find({}, (error, allworkouts) => {
    res.render('edit_personal.ejs' , {workouts: allworkouts});
    });
});

// SHOW (get)
controller1.get('/index/show_preset' , (req,res) => { 
    res.render('show_preset.ejs' , {workouts: preset_routine});
})


controller1.get('/index/show_personal' , (req,res) => {
    UserRoutine.find({}, (error, allworkouts) => {
        res.render('show_personal.ejs', {workouts: allworkouts});
    });
});


// =======================================
//         CONTROLLER EXPORT
// =======================================
// Export controller to server
module.exports = controller1;
