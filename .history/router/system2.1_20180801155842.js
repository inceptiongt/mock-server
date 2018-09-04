
var fs = require('fs')
var express = require('express');
var app = express();

app.use('/system/findAllRegionAndCameras.action', function (req, res) {
    fs.readFile('./response/sys/findDepUs.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;