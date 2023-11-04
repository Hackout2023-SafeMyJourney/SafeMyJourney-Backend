const mongoose = require("mongoose");
const Driver=require('./Driver');
const Passanger=require('./Passanger');

const RideSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  driver_details:{
        type:Schema.Types.ObjectId,
        ref:'Driver'
  },
  passanger_details:{
        type:Schema.Types.ObjectId,
        ref:'Passanger'
   }

});

module.exports = mongoose.model("Rides",RideSchema);
