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
    var query = req.query
    var {id} = query
    var path = ''
    if (!!~[47, 23, 14].indexOf(parseInt(id))) {
        path ='./response/control/getControl00.2.3.json'
    } else {
        path = './response/control/getControl.2.3.json'
    }
    fs.readFile(path, function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;