const express = require("express");
require('dotenv').config();
const nodemailer = require('nodemailer')
require('express-async-errors');
const { json } = require("express");
const flights = require("./routes/flightRoute");


const app = express();

app.use(json());

app.use("/api/flight", flights);

let transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 3000,
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});

let mailOptions = {
  from: 'thomasjoshuaseun@gmail.com',
  to: 'joshuaoluwaseun004@gmail.com',
  subject: 'Nodemailer Test Project',
  text: 'Hi This is my nodemailer project'
}

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
