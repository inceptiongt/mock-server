var fs = require('fs')
var express = require('express');
var app = express();


app.post('/control/pageControls.action', function (req, res) {
    var body = req.body
    var { analysisWay } = body
    var path = ''
    if ( parseInt(analysisWay) === 0) {
        path = './response/control/pageControls00.2.3.json'
    } else {
        path = './response/control/pageControls.2.3.json'
    }
    fs.readFile(path, function(e, d){
        res.json(JSON.parse(d))
    })
});

app.use(/\/control\/getControl.action*/, function (req, res) {
    fs.readFile('./response/control/getControl.2.3.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;