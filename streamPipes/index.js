const fs = require("fs")
const http = require("http")

const server = http.createServer()

server.on('request', (req,res) => {
    // / 1 st way
    // fs.readFile('just.txt',(err,data) =>{
    //     if(err) {return console.error(err)}
    //     res.end(data.toString());
    // })

    // 2 nd way
    // const rstream = fs.createReadStream('just.txt')
    // rstream.on('data',(chunkdata) => {
    //     res.write(chunkdata)
    // })
    // rstream.on("end",()=>{
    //     res.end()
    // })
    // rstream.on("error",()=>{ 
    //     console.log(err)
    //     res.end("error")
 
    // 3rd way
    const rstream = fs.createReadStream('../streamModule/just.txt')
    rstream.pipe(res)

})

server.listen(8000,'127.0.0.1')