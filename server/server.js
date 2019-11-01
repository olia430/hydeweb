const express = require('express')

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


//路由汇总
const userRouter = require('./route/users')
const locRouter = require('./route/location')
const cityRouter = require('./route/city')
const tripPlan = require('./route/trip')
const source = require('./route/source')


const app = express()

//设置跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})

app.use('/users', userRouter)
app.use('/location', locRouter)
app.use('/city', cityRouter)
app.use('/trip', tripPlan)
app.use('/source', source)


app.use(cookieParser())
app.use(bodyParser.json())

app.listen(9003, '192.168.1.1',function () {
    console.log('I love you~');
})


// const db_url = 'mongodb://localhost:27017/test'
// mongoose.connect(db_url, { useNewUrlParser: true })
// let db = mongoose.connection;
// db.on('connected',function () {
//     console.log('mogo connect success');
// })
//
// let kittySchema = mongoose.Schema({
//     name: String
// });
//
//
// kittySchema.methods.speak = function () {
//     let greeting = this.name
//         ? "Meow name is " + this.name
//         : "I don't have a name";
//     console.log(greeting);
// }
// let Kitten = mongoose.model('Kitten', kittySchema);
//
// let felyne = new Kitten({ name: 'WE ARE HELLO KITTY!!!!' });
// console.log(felyne.name);
// var fluffy = new Kitten({ name: 'HELLO KITTY!!!!' });
// fluffy.speak()