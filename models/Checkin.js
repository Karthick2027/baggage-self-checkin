const mongoose = require("mongoose")
counterno = Math.floor(Math.random() * 5)
const selfCheckin = new mongoose.Schema({
  Passengername: {
    type: String,
    required: true,
  },
  Phonenumber: {
    type: Number,
    default: "99438 44532",
  },
  Email: {
    type: "String",
    default: "abc@gmail.com",
  },
  Flightnumber: {
    type: Number,
    default: "AI 126",
  },
  Destination: {
    type: String,
    default: "Chicago to Delhi",
  },
  Counternumber: {
    type: Number,
    default: counterno,
  },
})
module.exports.Checkin = mongoose.model("Checkin", selfCheckin)
