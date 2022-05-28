require("dotenv").config();
const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let { name, email, message } = req.body;
  /* const dateTimeInquirySubmitted = () =>
    `
    <p>${new Date().toISOString().slice(0, 10)}</p>
    <p>${new Date().toLocaleTimeString()}</p>
    `; */
  if (name.length === 0 || email.length === 0 || message.length === 0) {
    return res.json({ msg: "Please fill out the fields" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: "cybre3@gmail.com",
      pass: "Sweetness7!",
    },
  });

  let mailOptions = {
    from: email,
    to: "cybre3@gmail.com",
    subject: `Full Stack Inquiry from ${name}`,
    html: `      
    <h3>Contact Information<h3/>
    <ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>    
    </ul>
    <h3>Message</h3>
    <p>${message}<p/>
     `,
  };
  /*   <h3>Date & Time</h3>
    <p>${localDateTime(headers.date)}<p/> */

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error) return res.status(400).json({ msg: "Please fill out the fields" });
      res.status(200).json({ msg: "Thank you for contacting Starrika" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});

module.exports = router;
