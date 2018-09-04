
var fs = require('fs')
var express = require('express');
var app = express();

app.get('/resource/asynFindRegAndCameras.action', function (req, res) {
    fs.readFile('./response/resource/findRegionTree.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;