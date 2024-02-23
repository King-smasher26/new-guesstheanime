const mongoose = require('mongoose')

const imginfoSchema = new mongoose.Schema({
    imgurl1:{
        type:String,
        required:true
    },
    level:{
        type:Number
    },
    options:{
        type:Array,
        required:true
    }
})

const imginfo = mongoose.model('addanime', imginfoSchema)
module.exports=imginfo;