const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const products = [{name:'eye linear', price:3}, {name:'brounzer', price:4}]

app.use('/',express.static('public'))

app.get('/api/get-products', (req, res)=>{
    res.send(products)

})

app.post('/api/add-product',(req, res)=>{
   

    products.push(req.body)
    console.log(products)

    res.send(products);
});

const port = process.env.PORT || 3006
app.listen(port, ()=>{console.log('listen on', port)})