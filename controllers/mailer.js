'use strict';
const nodemailer = require('nodemailer');

const mailer = {
  sendEmail: (contactForm) => {
    nodemailer.createTestAccount((err, account) => {
      // create transporter object
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS 
        }
    });
  
    // setup email 
    let mailOptions = {
        from: `${contactForm.name} <${contactForm.email}>`, // sender address
        to: 'cardinaltest21@gmail.com', // wherever they want to recieve the emails, this could be the same as the sender
        subject: `${contactForm.subject}`, // Subject line
        text: `${contactForm.message} ${contactForm.email}` // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
  });
  }
}

module.exports = mailer;