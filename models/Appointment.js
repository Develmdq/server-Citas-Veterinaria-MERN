const mongoose = require('mongoose')

const AppointmentsSchema = mongoose.Schema({
  petName: {type:String, require:true, trim:true},
  ownerName: {type:String, require:true, trim:true},
  email: {type:String, require:true, trim:true},
  day: {type:String, require:true, trim:true},
  hour: {type:String, require:true, trim:true},
  symptom: {type:String, require:true, trim:true},
},{versionKey:false});

module.exports = mongoose.model("Appointment", AppointmentsSchema);
