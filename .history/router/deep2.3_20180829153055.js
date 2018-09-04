var fs = require('fs')
var express = require('express');
var app = express();

app.post('/deepdevice/findDeepDeviceMayControl.action', function (req, res) {
    fs.readFile('./response/deepD/findDDMC.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.post('/deepdevice/findDeepListLibByIndexCode.action', function (req, res) {
    fs.readFile('./response/deepD/findDLLByIC.json', function(e, d){
        res.json(JSON.parse(d))
    })
});


app.post('/deepdevice/findDeepInMindChannel.action', function (req, res) {
    fs.readFile('./response/deepD/findDIMChannel.json', function(e, d){
        res.json(JSON.parse(d))
    })
});