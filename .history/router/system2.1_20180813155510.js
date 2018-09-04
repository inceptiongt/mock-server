
var fs = require('fs')
var express = require('express');
var app = express();

app.use('/system/findAllRegionAndCameras.action', function (req, res) {
    fs.readFile('./response/resource/findRegionTree.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.use('/system/lib/asynLoadDeptAndUserTree.action', function (req, res) {
    fs.readFile('./response/sys/asynLDAUTrees.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;