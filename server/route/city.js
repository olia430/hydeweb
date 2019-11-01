const chinaCity = require('../json/city/china')
const shanghaiStation = require('../json/city/shanghai')

const express = require('express')
const Router = express.Router()

Router.get('/china',function (req,res) {
    return res.json(chinaCity)
})

Router.get('/shanghai',function (req,res) {
    return res.json(shanghaiStation)
})

module.exports = Router