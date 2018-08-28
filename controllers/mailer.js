'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
const mailer = {
  sendEmail: (contactForm, cb) => {
    nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: `${contactForm.name} <${contactForm.email}>`, // sender address
        to: 'mccaffertycr@gmail.com', // list of receivers
        subject: `${contactForm.subject}`, // Subject line
        text: `${contactForm.message}` // plain text body
        //html: '<b>Hello world?</b>' html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
  });
}
}

module.exports = mailer;