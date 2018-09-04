
var fs = require('fs')
var express = require('express');
var app = express();

// app.use(express.static('public'));

app.post('/facesearch/findSnapFace.action', function (req, res) {
//   res.send('Hello World!');
    fs.readFile('./response/faceSearch/findSnapFace.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

module.exports = app;