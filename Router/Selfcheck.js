const Router = require("express")
const router = Router()
const { Checkin } = require("../models/Checkin.js")

router.get("/", async (req, res) => {
  try {
    const Check = await Checkin.find()
    if (!Check) {
      throw new Error("no new a")
    }

    res.status(200).json(Check)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.post("/", async (req, res) => {
  try {
    const Check = await new Checkin({
      Passengername: req.body.Passengername,
      Phonenumber: req.body.Phonenumber,
      Email: req.body.Phonenumber,
      Flightnumber: req.body.Flightnumber,
      Destination: req.body.Destination,
      Counternumber: req.body.Counternumber,
    }).save()

    if (!Check) {
      throw new Error("no transactions saved")
    }

    res.status(200).json(Check)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
