const mongoose = require("mongoose");
const Driver=require('./Driver');
const Passanger=require('./Passanger');

const RideSchema = new mongoose.Schema({
  source_latitude: {
    type: String,
    required: true,
  },
  destination_latitude: {
    type: String,
    required: true,
  },
  source_longitude: {
    type: String,
    required: true,
  },
  destination_longitude: {
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
