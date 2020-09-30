const Mongoose  = require("mongoose");

const alienSchema = new Mongoose.Schema({
    name : {
        type:String,
        required : true

    },
    tech : {
        type:String,
        required: true
    },
    sub : {
        type:Boolean,
        required:true,
        default:false
    }

})
module.exports = Mongoose.model('Alien',alienSchema)