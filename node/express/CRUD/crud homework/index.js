const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const products = [
    { type: 'eyeshadows', productId: 1, img: 'eyeshadow1.jpg', name: 'Eyeshadow 1', price: "$35.00" }, { type: 'eyeshadows', productId: 2, img: 'eyeshadow2.jpg', name: 'Eyeshadow 2', price: "$45.00" }, { type: 'eyeshadows', productId: 3, img: 'eyeshadow3.jpg', name: 'Eyeshadow 3', price: "$48.00" },
    { type: 'foundations', productId: 4, img: 'foundation1.jpg', name: 'Foundation 1', price: "$34.00" }, { type: 'foundations', productId: 5, img: 'foundation2.jpg', name: 'Foundation 2', price: "$30.00" }, { type: 'foundations', productId: 6, img: 'foundation3.jpg', name: 'Foundation 3', price: "$36.00" },
    { type: 'lipsticks', productId: 7, img: 'lipstk1.jpg', name: 'Lipstick 1', price: "$25.00" }, { type: 'lipsticks', productId: 8, img: 'lipstk2.jpg', name: 'Lipstick 2', price: "$22.00" }, { type: 'lipsticks', productId: 9, img: 'lipstk3.jpg', name: 'Lipstick 3', price: "$28.00" }
]

app.use('/', express.static('public'))

app.get('/api/get-products', (req, res) => {
    res.send(products)

})


app.get('/api/get-lipsticks', (req, res) => {
    let lipsticks = products.filter(product => product.type == 'lipsticks')
    res.send(lipsticks)
})

app.get('/api/get-foundations', (req, res) => {
    let foundations = products.filter(product => product.type == 'foundations')
    res.send(foundations)
})

app.get('/api/get-eyeshadows', (req, res) => {
    let eyeshadows = products.filter(product => product.type == 'eyeshadows')
    res.send(eyeshadows)
})

app.post('/api/add-product', (req, res) => {

    products.push(req.body)
    console.log(products)

    res.send(products);
});

//update product
app.put('/api/update-product', (req, res) => {
    console.log(req.body)

    const {productId, newPrice} = req.body;
    console.log(productId);
    console.log(newPrice)

    //go to the products
    let index = products.findIndex(product=>product.productId == productId)
    //find the product

    console.log('index', index)


    // change the price
    products[index].price = newPrice

    //sresponce with the new list of products
    res.send(products)
})






const port = process.env.PORT || 3002
app.listen(port, () => { console.log('listen on', port) })