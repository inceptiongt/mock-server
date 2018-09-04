var fs = require('fs')
var express = require('express');
var app = express();

app.get('/deepdevice/findDeepDeviceMayControl.action', function (req, res) {
    fs.readFile('./response/deepD/findDDMC.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.get('/deepdevice/findDeepListLibByIndexCode.action', function (req, res) {
    fs.readFile('./response/deepD/findDLLByIC.json', function(e, d){
        res.json(JSON.parse(d))
    })
});


app.get('/deepdevice/findDeepInMindChannel.action', function (req, res) {
    fs.readFile('./response/deepD/findDIMChannel.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app