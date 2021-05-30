var express = require('express');
var app = express();
require('dotenv').config();



// middleware
app.use("/public", express.static(__dirname + "/public"));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', (req, res) => {
    res.send({"message": 'Hello json'})
})

// app.get('/json', (req, res) => {
//     data = "Hello json"
//     if (process.env.MESSAGE_STYLE === "uppercase") {
//         res.send({"message": data.toUpperCase()})
//     }
//     res.send({"message": data})
// })



























 module.exports = app;
