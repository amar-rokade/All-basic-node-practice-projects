const fs = require('fs')
fs.writeFile('newfile.txt','My name is amar rokade',(err)=>{
    console.log('created')
    console.log(err)
})