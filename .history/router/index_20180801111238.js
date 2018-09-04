// var app = require("express")()
var control = require("./control")
var humanRouter = require("./human")
var resourceRouter = require("./resource")
var systemRouter = require("./system")

var home = require("./home")
var control_2_1 = require("./control2.1")

// app.use([control, humanRouter, resourceRouter, systemRouter])

module.exports = {
    control,
    humanRouter,
    resourceRouter,
    systemRouter,
    home,
    control_2_1
}