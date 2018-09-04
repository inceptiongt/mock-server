var fs = require('fs')
var express = require('express');
var app = express();

// app.use(express.static('public'));

app.post('/control/pageControls.action', function (req, res) {
//   res.send('Hello World!');
    fs.readFile('./response/control/pageControls.action.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.post('/control/*getControl.action', function (req, res) {
//   res.send('Hello World!');
    fs.readFile('./response/control/getControl.action.json', function(e, d){
        res.json(JSON.parse(d))
    })
});
module.exports = app;