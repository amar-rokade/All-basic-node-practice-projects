const mongoose = require('mongoose')


// connection  db creations 
mongoose.connect("mongodb://localhost:27017/first",{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>console.log('connection successfull'))
.catch((err)=>console.log(err));

// schema
const playlistSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    type : String,
    videos : Number,
    author : String,
    active : Boolean,
    date : {
        type:Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist",playlistSchema)
