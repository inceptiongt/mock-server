
var fs = require('fs')
var express = require('express');
var app = express();
app.post('/human/findAccessListLibs.action', function (req, res) {
    fs.readFile('./response/human/findAccessListLibs.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.post('/human/findListLibs.action', function (req, res) {
    fs.readFile('./response/human/findListLibs.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.post('/human/pageHumans.action', function (req, res) {
    fs.readFile('./response/human/pageHumans.2.3.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;