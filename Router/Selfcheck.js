const Router = require("express")
const router = Router()
const { Checkin } = require("../models/Checkin.js")
const nodemailer = require("nodemailer")
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

    let transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "karthikeyanjeyaveeran@gmail.com",
        pass: "srcwhixxzulacgak",
      },
    })
    let mailOptions = {
      from: "Self Checkin<karthikeyanjeyaveeran@gmail.com>",
      to: req.body.Email,
      subject: "For Baggage Carousel Number",
      text: `Your Details successfully Registered.
      Your Details ,
      Passengername: ${req.body.Passengername}.
      Phonenumber: ${req.body.Phonenumber}
      Email: ${req.body.Email}.,
      Flightnumber: ${req.body.Flightnumber},
      Destination: ${req.body.Destination}.`,
      html: `<p>You have successfully submitted the form using the details.</p> 
      <ul>
      
      <li>Passengername: ${req.body.Passengername}</li>
      <li>Email: ${req.body.Email}</li>
      <li>Phonenumber: ${req.body.Phonenumber}</li>
      <li>Flightnumber: ${req.body.Flightnumber}</li>
      <li>Destination: ${req.body.Destination}</li>
      </ul>`,
    }

    transport.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })

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
