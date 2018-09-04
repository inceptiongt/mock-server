var fs = require('fs')
var express = require('express');
var app = express();

app.post('/deepdevice/findDeepDeviceMayControl.action', function (req, res) {
//   res.send('Hello World!');
    fs.readFile('./response/deepD/findDDMC.json', function(e, d){
        res.json(JSON.parse(d))
    })
});