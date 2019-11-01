const hot = require('../json/worldLocation/hot')
const africa = require('../json/worldLocation/africa')
const asia = require('../json/worldLocation/asia')
const europe = require('../json/worldLocation/europe')
const northAmerica = require('../json/worldLocation/northAmerica')
const oceania = require('../json/worldLocation/oceania')
const southAmerica = require('../json/worldLocation/southAmerica')

const express = require('express')
const Router = express.Router()


Router.get('/hot',function (req,res) {
        return res.json(hot)
})

Router.get('/africa',function (req,res) {
        return res.json(africa)
})

Router.get('/asia',function (req,res) {
        return res.json(asia)
})

Router.get('/europe',function (req,res) {
        return res.json(europe)
})

Router.get('/northAmerica',function (req,res) {
        return res.json(northAmerica)
})

Router.get('/oceania',function (req,res) {
        return res.json(oceania)
})


Router.get('/southAmerica',function (req,res) {
        return res.json(southAmerica)
})


module.exports = Router