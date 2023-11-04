const mongoose = require("mongoose");

const passangerSchema = new mongoose.Schema({
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
  nomini_name: {
    type: String,
    required: true,
  },
  nomini_Mobile: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Passanger", passangerSchema);
