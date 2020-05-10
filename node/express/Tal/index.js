const express = require('express');
const app = express();

const port =3002;

app.get('/',(req,res)=>{
    res.send('Hi')
})

app.get('/masha',(req,res)=>{
    res.send('Hi Masha')
})

app.get('/lidia',(req,res)=>{
    res.send('Hi Lidia')
})

app.listen(port,()=>{console.log(`server listen on port ${port}`)})