/*
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6l

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

*/
const express = require('express');

const axios = require('axios');
const { response } = require('express');

var cors = require('cors')
const bp = require('body-parser')

const app = express();



app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nicolas1.fromme@gmail.com',
        pass: 'Bernhard2015'
    },
    tls: {
        rejectUnauthorized: false
    }
});


app.post("/api", function(req, res) { 
    //console.log(req.body.d2)

    console.log(req.body.d2)

    var mailOptions = {
        from: 'nicolas1.fromme@gmail.com',
        to: 'nicolas1.fromme@gmail.com',
        subject: 'Neues Formular!',
        text: JSON.stringify(req.body.d2, null, 4)
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);