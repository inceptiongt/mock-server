var fs = require('fs')
var express = require('express');
var app = express();


app.get('/modules/controller/getSessionInfo.do', function (req, res) {
    fs.readFile("./response/pas/getSessionInfo.json", function(e, d){
        res.json(JSON.parse(d))
    })
});

app.get("/modules/controller/getMenu.do", function (req, res) {
    fs.readFile("./response/pas/getMenu.json", function(e, d){
        res.json(JSON.parse(d))
    })
});

app.post("/modules/hgis/getHgisInfo.do", function (req, res) {
    fs.readFile("./response/pas/getHgisInfo.json", function(e, d){
        res.json(JSON.parse(d))
    })
});

app.get("/modules/hgis/getHGisParams.do", function (req, res) {
    fs.readFile("./response/pas/getHGisParams.json", function(e, d){
        res.json(JSON.parse(d))
    })
});

app.post("/modules/hgis/findCameraByGeometry.do", function (req, res) {
    fs.readFile("./response/pas/findCameraByGeometry.json", function(e, d){
        res.json(JSON.parse(d))
    })
});

app.get("/modules/region/findAllRegions.do", function (req, res) {
    fs.readFile("./response/pas/findAllRegions.json", function(e, d){
        res.json(JSON.parse(d))
    })
});

app.get("/modules/region/findRegionInfo.do", function (req, res) {
    fs.readFile("./response/pas/findRegionInfo.json", function(e, d){
        res.json(JSON.parse(d))
    })
});
app.get("/modules/organize/getPointTree.do", function (req, res) {
    fs.readFile("./response/pas/getPointTree.json", function(e, d){
        res.json(JSON.parse(d))
    })
});

app.get('/modules/organize/getCameraTree.do', function (req, res) {
    var body = req.query
    var { indexCode } = body
    var path = ''
    if ( parseInt(indexCode) === 0) {
        path = './response/pas/getCameraTree0.json'
    } else {
        path = './response/pas/getCameraTree.json'
    }
    fs.readFile(path, function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;