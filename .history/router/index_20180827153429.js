// var app = require("express")()
var control = require("./control")
var humanRouter = require("./human")
var resourceRouter = require("./resource")
var systemRouter = require("./system")

var home = require("./home")
var home_2_3 = require("./home2.3")
var control_2_1 = require("./control2.1")
var control_2_3 = require("./control2.3")
var sysRouter_2_1 = require("./system2.1")
var resource_2_1 = require("./resource2.1")
var human_2_1 = require("./human2.1")
var human_2_3 = require("./human2.3")
var sysRouter_2_3 = require("./system2.3")
var faceSearchRouter_2_3 = require("./faceSearch2.3")

// app.use([control, humanRouter, resourceRouter, systemRouter])

module.exports = {
    control,
    humanRouter,
    resourceRouter,
    systemRouter,
    home,
    home_2_3,
    control_2_1,
    control_2_3,
    sysRouter_2_1,
    sysRouter_2_3,
    resource_2_1,
    human_2_1,
    human_2_3,
    faceSearchRouter_2_3
}