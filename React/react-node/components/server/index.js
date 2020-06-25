const express = require('express')
const app = express();
const port = process.env.PORT || 3200;

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

const text = {"text":"Hi Masha and Lidia and Tal"};
const fullName={"fullName": "Masha Alarcon"};
const number={"number": "120"};
const number2={"number2": "68"};

app.get('/api/hi', (req, res)=>{
    res.send(text)
});

app.get('/api/date', (req, res)=>{
    res.send({year:new Date().getFullYear()})
});

app.get('/api/fullName', (req, res)=>{
    res.send(fullName);
});

app.get('/api/number', (req, res)=>{
    res.send(number);
});

app.get('/api/number2', (req, res)=>{
    res.send(number2);
});

app.listen(port, ()=>{console.log(`listen on port ${port}`)})










