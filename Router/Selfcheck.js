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

module.exports = router
