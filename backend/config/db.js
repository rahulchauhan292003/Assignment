const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/assign-noida").then(()=>{
        console.log("DB connected")
    })
}
module.exports = connectDB