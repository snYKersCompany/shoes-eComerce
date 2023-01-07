const nodemailer = require('nodemailer');

require('dotenv').config();

const { PASS } = process.env;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "henrypg.n2@gmail.com", // generated ethereal user
      pass: PASS, // generated ethereal password
    },
  });

module.exports = {
    transporter
}