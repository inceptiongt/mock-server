var fs = require('fs')
var express = require('express');
var app = express();


app.post('/control/pageControls.action', function (req, res) {
    fs.readFile('./response/control/pageControls.2.3.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.use(/\/control\/getControl.action*/, function (req, res) {
    fs.readFile('./response/control/getControl.2.3.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;