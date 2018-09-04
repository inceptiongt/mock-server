// var app = require("express")()
var control = require("./control")
var humanRouter = require("./human")
var resourceRouter = require("./resource")
var systemRouter = require("./system")

// app.use([control, humanRouter, resourceRouter, systemRouter])

module.exports = {
    control,
    humanRouter,
    resourceRouter,
    systemRouter
}