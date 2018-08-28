'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'urnt7u2n7ztuizq7@ethereal.email',
          pass: 'vev6dwBCrhrHGKUSkF'
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Connor McCafferty" <mccaffertycr@gmail.com>', // sender address
        to: 'mccaffertycr@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?' // plain text body
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


module.exports = nodemailer;