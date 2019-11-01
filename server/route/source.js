const food = require('../json/mapSource/food')
const experience = require('../json/mapSource/experience')
const hotel = require('../json/mapSource/hotel')
const shop = require('../json/mapSource/shop')
const traffic = require('../json/mapSource/traffic')
const nature = require('../json/mapSource/nature')

const express = require('express')
const Router = express.Router()

Router.get('/food',function (req,res) {
    return res.json(food)
})

Router.get('/experience',function (req,res) {
    return res.json(experience)
})

Router.get('/hotel',function (req,res) {
    return res.json(hotel)
})

Router.get('/shop',function (req,res) {
    return res.json(shop)
})

Router.get('/traffic',function (req,res) {
    return res.json(traffic)
})

Router.get('/nature',function (req,res) {
    return res.json(nature)
})


module.exports = Router