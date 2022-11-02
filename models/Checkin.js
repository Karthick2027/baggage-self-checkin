const mongoose = require("mongoose")
let counterno = Math.floor(Math.random() * 5) + 1
let date = new Date(Date.now()).getMonth() + 1
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
  Date: {
    type: String,
    default:
      new Date(Date.now()).getDate() +
      "/" +
      date +
      "/" +
      new Date(Date.now()).getFullYear(),
  },
  Time: {
    type: Number,
    default: new Date(Date.now()).getTime(),
  },
})
module.exports.Checkin = mongoose.model("Checkin", selfCheckin)
