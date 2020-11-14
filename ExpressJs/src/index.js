const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")



// console.log(path.join(__dirname,"../public"))
staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates")
const partialPath = path.join(__dirname,"../templates/partials")


// to use view engine 
app.set('view engine',"hbs")
app.set('views',templatePath)
hbs.registerPartials(partialPath)
app.use(express.static(staticPath))
app.get('/',(req,res)=>{
    res.render("index",{
        product_name:"NOW NEW PRODUCT"
    })
})

app.get('/checkout',(req,res)=>{
    res.render("checkout")
})

app.get('/',(req,res)=>{
    res.send("<h1>Hellow from the express</h1>")

})

// app.get('/about',(req,res)=>{
//     res.send("I am in about")
// })


app.listen(8000,()=>{
    console.log("listing")
}) 