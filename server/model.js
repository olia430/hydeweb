const mongoose = require('mongoose')
const db_url = 'mongodb://localhost:27017/test'

mongoose.connect(db_url)

const models = {
    users:{
        username:String,
        pwd:String,
        type:String,
        avart:String,
        money:String,
        company:String,
        desc:String,
        title:String,
    },
    chat:{

    },
    location:{

    },
    city:{

    },
    trip:{}
}
for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}
