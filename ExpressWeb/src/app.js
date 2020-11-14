const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8000

// static path
app.use(express.static(path.join(__dirname,'../public')))


// route
app.get("/",(req,res)=>{
    res.send("hii")

})

app.get("/about",(req,res)=>{
    res.send("about")

})

app.get("/weather",(req,res)=>{
    res.send("weather")

})

//error 404v handel
app.get("*",(req,res)=>{
    res.send("404 page")
})
app.listen(port,()=>{
    console.log(`listining port at ${port}`)
})