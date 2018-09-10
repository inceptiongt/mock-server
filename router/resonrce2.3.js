
var fs = require('fs')
var express = require('express');
var app = express();

app.get('/resource/asynFindRegAndCameras.action', function (req, res) {
    var { indexCode } = req.query
    var path = ''
    if ( indexCode == 0) {
        path = './response/resource/asynFindRACam01.2.3.json'
    } else if (indexCode == 32) {
        path = './response/resource/asynFindRACam02.2.3.json'
    }
    else {
        path = './response/resource/asynFindRACam2.3.json'
    }
    fs.readFile(path, function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;