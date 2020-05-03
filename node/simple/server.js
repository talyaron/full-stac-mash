const express = require('express')
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())
 
app.use(express.static('public'))

app.get('/home', (req,res)=>{
    res.send('<h1>Hi Home</h1>')
})

app.post('/myName', (req, res)=>{
    let {name} = req.body;

    console.log(name)

    res.send({message:`got your name, and it is: ${name}`})

})
 
app.listen(3002,()=>{
    console.log("Server listen on port 3002")
})

