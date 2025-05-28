const path = require("path");
const sgMail = require("@sendgrid/mail");
const { memoryStorage } = require("multer");
require("dotenv").config();

const addMail = async(req, res, next) => {
    const { email, name, phone, prefer, message } = req.body;
const sender = process.env.SENDER_MAIL;
const recipient = process.env.RECIPIENT_MAIL
    

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        from: sender,
        subject: `AUTOMAX-GARAGE Contact us`,
        "personalizations": [
            {
              "to": [
                {
                  "email": recipient
                }
              ],
              "send_at": 1600188812
            },
            {
              "to": [
                {
                  "email": sender
                }
              ],
              "send_at": 1600275471
            }
          ],
        text: email, name, phone, prefer, message,
        html: `<div><p>A visitor to the Automax Garage website would like to contact you.</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>I PREFER TO BE CONTACTED BY: ${prefer}</p><p>Message: ${message}</p></div>`,
    }

    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })

    res.status(201).json({
        message: "success",
        msg
    })
}

module.exports = {
    addMail
}