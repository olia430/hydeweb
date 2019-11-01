const hotJson = require('../json/worldLocation/hot')

const express = require('express')
const Router = express.Router()


const model = require('../model')
const Users = model.getModel('users')

Router.get('/list',function (req,res) {
    Users.find({},function (err,doc) {
        return res.json(doc)
    })
})

Router.get('/info',function (req,res) {
    return res.json(hotJson)
    //return res.json({code:1})

})

Router.post('/register',function (req,res) {
    const {username,pwd,type} = req.body
    Users.findOne({username:username},function (err,doc) {
        if(doc){
            return res.json({code:1,msg:'用户重复'})
        }
        Users.create({username,pwd,type},function (err,doc) {
            if(err){
                return res.json({code:1,msg:'后端出错了'})
            }
            return res.json({code:0})
        })
    })
})

module.exports = Router