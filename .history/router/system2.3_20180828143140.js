

var fs = require('fs')
var express = require('express');
var app = express();

app.use('/system/findAllRegionAndCameras.action', function (req, res) {
    fs.readFile('./response/resource/findRegionTree.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.use('/system/lib/asynLoadDeptAndUserTree.action*', function (req, res) {
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