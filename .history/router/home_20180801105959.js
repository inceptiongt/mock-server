var app = require('express')()
var fs = require('fs')

app.get('getAuthorizedMenu.action', function(req, res){
    fs.readFile('./response/home/getAuthMenu.2.1.json', function(e, d){
        res.json(JSON.parse(d))
    })
})