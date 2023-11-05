const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = require("mongodb").ObjectID;
const Driver = require("./Driver");
const Passanger = require("./Passanger");

const RideSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  driver_details: {
    type: Schema.Types.ObjectId,
    ref: "Driver",
  },
  passanger_details: {
    type: Schema.Types.ObjectId,
    ref: "Passanger",
  },
  Ride_Type: {
    type: String,
  },
  Cab_No: {
    type: String,
  },
});

module.exports = mongoose.model("Rides", RideSchema);
