var fs = require('fs')
var express = require('express');
var app = express();
var router = require("./router")

app.use(router)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

