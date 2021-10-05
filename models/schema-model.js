// =======================================
//        SCHEMA MODEL DEPENDENCIES
// =======================================
const mongoose = require('mongoose');


// =======================================
//               SCHEMA  
// =======================================
const workoutSchema = new mongoose.Schema({
  name: {type: String , required: true},
  sets: {type: Number , required: true},
  lbs: {type: Number, required: true},
  reps: {type: Number},
  rest: {type: Number },
  rpe: {type: Number }
});

// =======================================
//                 MODEL 
// =======================================
const UserRoutine = mongoose.model('UserRoutine', workoutSchema);

// =======================================
//             EXPORT MODEL
// =======================================
// Export model to controller
module.exports = UserRoutine;