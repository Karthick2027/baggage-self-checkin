const Router = require("express")
const router = Router()
const { Checkin } = require("../models/Checkin.js")

router.get("/", async (req, res) => {
  try {
    const Check = await Checkin.find()
    if (!Check) {
      throw new Error("no new data")
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
      Email: req.body.Email,
      Flightnumber: req.body.Flightnumber,
      Destination: req.body.Destination,
      Counternumber: Math.floor(Math.random() * 5) + 1,
    }).save()

    if (!Check) {
      throw new Error("no transactions saved")
    }

    res.status(200).json(Check)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const Check = await Checkin.find({ _id: req.params.id })
    if (!Check) {
      throw new Error("no new data")
    }
    res.status(200).json(Check)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
