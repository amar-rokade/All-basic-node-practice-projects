const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("hii")
})
server.listen(8000)