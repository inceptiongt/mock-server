var fs = require('fs')
var express = require('express');
var app = express();
var {control, humanRouter, resourceRouter, systemRouter, home, sysRouter_2_1, control_2_1} = require("./router")


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
app.use('/2.1/f*s', [home, sysRouter_2_1, control_2_1])

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

