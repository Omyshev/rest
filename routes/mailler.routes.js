const {Router} = require('express')
const router = Router()
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')


// const transport = nodemailer.createTransport()


router.post('/mail', async (req, res) => {
  const email = req.body
  console.log(email)
  res.status(201).json({ email })
  try {

  } catch (e) {
   
  }

})

  module.exports = router