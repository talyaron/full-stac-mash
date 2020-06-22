const express = require('express')
const app = express();
const port = process.env.PORT || 3200;

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

const text = {"text":"Hi Masha and Lidia and Tal"};

app.get('/api/hi', (req, res)=>{
    res.send(text)
});

app.get('/api/date', (req, res)=>{
    res.send({year:new Date().getFullYear()})
});


app.listen(port, ()=>{console.log(`listen on port ${port}`)})