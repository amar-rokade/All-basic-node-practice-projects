// var http  = require('http')
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write('welcome back')
//     res.end()
// }).listen(8000)


// var fs = require('fs')
// fs.unlink('clac1.js',function(err){
//     console.log('deleted')
// })

const express = require('express')
const app = express()
app.get('/',function(req,res){
    res.send('hello world')
})
app.get('/amar/',function(req,res){
    res.send('amar here')
})

app.get('/amar/:id',function(req,res){
    const id  = req.params.id
    res.send('amar here '+ id)
})
app.listen(8000,function(req,res){
    console.log('hii')
})