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

// app.get('/json', (req, res) => {
//     res.send({"message": 'Hello json'})
// })

app.get('/now', (req, res, next) => {
    const now = new Date
    req.time = now.toString()
    next()
}, (req, res) => {
    res.send({ "time": req.time })
})


app.get('/:word/echo', (req, res) => {
    res.send({"echo": req.params.word})
})

app.get('/json', (req, res) => {
    let data = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") {
        data = data.toUpperCase()
    }
    res.send({"message": data})
})

app.route('/name')
    .get((req, res) => {
        res.send({ "name": `${req.query.first} ${req.query.last}`})
    })
    .post((req, res) => {
        res.send({ "name": `${req.query.first} ${req.query.last}`})
    })

























 module.exports = app;
