
var app = require('express')()
var fs = require('fs')

app.get('/getAuthorizedMenu.action', function(req, res){
    var path = ''
    if (req.baseUrl.includes('fas')) {
        path = './response/home/getAuthMenu.2.3.json'
    } else {
        paht = './response/home/getAuthMenuFms.2.3.json'
    }
    fs.readFile(path, function(e, d){
        res.json(JSON.parse(d))
    })
})

app.get('/web/auth.action', function(req, res){
    fs.readFile('./response/home/auth.json', function(e, d){
        res.json(JSON.parse(d))
    })
})

module.exports = app