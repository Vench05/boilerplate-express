var express = require('express');
var app = express();



// middleware
app.use("/public", express.static(__dirname + "/public"));


// console.log("Hello World");
// app.get('/', function (req, res) {
//     res.send('Hello Express');
// })


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})





























 module.exports = app;
