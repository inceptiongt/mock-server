var fs = require('fs')
var express = require('express');
var app = express();
var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var {control, humanRouter, resourceRouter, systemRouter, home, home_2_3, sysRouter_2_1, control_2_1, resource_2_1, human_2_1, sysRouter_2_3, faceSearchRouter_2_3, control_2_3, human_2_3, deep_2_3, resource_2_3} = require("./router")


//allow custom header and CORS
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.sendStatus(200); /让options请求快速返回/
    }
    else {
      next();
    }
  });

app.use('/1.5/f*s', [control, humanRouter, resourceRouter, systemRouter, home])
app.use('/2.1/f*s', [home, sysRouter_2_1, control_2_1, resource_2_1, human_2_1])
app.use('/2.3/f*s', [sysRouter_2_3, home_2_3, faceSearchRouter_2_3, control_2_3, human_2_3, deep_2_3, resource_2_3])

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

