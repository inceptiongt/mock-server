

var fs = require('fs')
var express = require('express');
var app = express();

app.use('/system/findAllRegionAndCameras.action', function (req, res) {
    fs.readFile('./response/resource/findRegionTree.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.use('/system/*/asynLoadDeptAndUserTree.action', function (req, res) {
    // * 兼容lib/hasphone
    var path = ""
    var {deptIndexCode} = req.query
    if (deptIndexCode) {
        path = "./response/sys/asyncLDAUTree01.2.3.json"
    } else {
        path = "./response/sys/asyncLDAUTree.2.3.json"
    }
    fs.readFile(path, function(e, d){
        res.json(JSON.parse(d))
    })
});

app.get('/system/asynFindRegionsCameras.action', function (req, res) {
    var { regionId } = req.query
    regionId = parseInt(regionId)
    var path = ''
    if ( regionId == 1) {
        path = './response/sys/asynFRC00.2.3.json'
    } else if (regionId == 2 ) {
        path = './response/sys/asynFRC01.2.3.json'
    }
    else {
        path = './response/sys/asynFRC2.3.json'
    }
    fs.readFile(path, function(e, d){
        res.json(JSON.parse(d))
    })
});


app.use('/system/findAllDepartmentAndUsers.action', function (req, res) {
    fs.readFile('./response/sys/findAllDAndU.json', function(e, d){
        res.json(JSON.parse(d))
    })
});


app.use('/system/hasphone/findAllDepartmentAndUsers.action', function (req, res) {
    fs.readFile('./response/sys/findAllDAndU.json', function(e, d){
        res.json(JSON.parse(d))
    })
});
app.use('/system/verifyConfiguration.action', function (req, res) {
    fs.readFile('./response/sys/verifyCOnf.json', function(e, d){
        res.json(JSON.parse(d))
    })
});
module.exports = app;