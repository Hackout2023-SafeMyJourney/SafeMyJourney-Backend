const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Mobile: {
    type: String,
    required: true,
  },
  Age: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Email_Id: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Profile_Image:{
    type:String,
    required:true,
  },
  QR_Image:{
    type:String,
    required:true,
  },
  Cab_No:{
    type:String,
    required:true,
  },
  Aadhar_No:{
    type:String,
    required:true,
  }
});

module.exports = mongoose.model("Driver", DriverSchema);
