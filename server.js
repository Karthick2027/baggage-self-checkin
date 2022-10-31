const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const router = require("./Router/Selfcheck.js")

require("dotenv").config()

const app = express()
app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use("/api/checkin", router)

app.get("/", (req, res) => {
  res.send("Hello World")
})

const home = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at the port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}
home()
