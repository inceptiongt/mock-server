
var fs = require('fs')
var express = require('express');
var app = express();

// app.use(express.static('public'));

app.post('/control/pageControls.action', function (req, res) {
//   res.send('Hello World!');
    fs.readFile('./response/control/pageControls.2.1.json', function(e, d){
        res.json(JSON.parse(d))
    })
});

app.post('/control/getControl.action*', function (req, res) {
//   res.send('Hello World!');
    fs.readFile('./response/control/getControl.2.1.json', function(e, d){
        res.json(JSON.parse(d))
    })
});
// app.post('/control/*pageCancelControls.action', function (req, res) {
// //   res.send('Hello World!');
//     fs.readFile('./response/control/pageCancelControls.action.json', function(e, d){
//         res.json(JSON.parse(d))
//     })
// });

module.exports = app;