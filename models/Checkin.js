const mongoose = require("mongoose")
let counterno = Math.floor(Math.random() * 5)
const selfCheckin = new mongoose.Schema({
  Passengername: {
    type: String,
    required: true,
  },
  Phonenumber: {
    type: Number,
    required: true,
  },
  Email: {
    type: "String",
    required: true,
  },
  Flightnumber: {
    type: String,
    required: true,
  },
  Destination: {
    type: String,
    required: true,
  },
  Counternumber: {
    type: Number,
    default: counterno,
  },
})
module.exports.Checkin = mongoose.model("Checkin", selfCheckin)
