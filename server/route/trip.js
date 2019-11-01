const tripPlan = require('../json/trip/tripPlan')
const tripDaily = require('../json/trip/tripDailyOne')
const dayEventOne = require('../json/trip/tripDailyOne')
const dayEventTwo = require('../json/trip/tripDailyTwo')

const express = require('express')
const Router = express.Router()

Router.get('/tripPlan',function (req,res) {
    return res.json(tripPlan)
})

Router.get('/tripDaily',function (req,res) {
    return res.json(tripDaily)
})
Router.get('/dayEventOne',function (req,res) {
    return res.json(dayEventOne)
})
Router.get('/dayEventTwo',function (req,res) {
    return res.json(dayEventTwo)
})


module.exports = Router