

var fs = require('fs')
var express = require('express');
var app = express();

app.get('/resource/*findRegionTree.action', function (req, res) {
//   res.send('Hello World!');
    fs.readFile('./response/resource/findRegionTree.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;