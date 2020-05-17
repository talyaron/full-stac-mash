const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use('/',express.static('public'))
app.use('/img', express.static('public/img'))

//mock data
// const eyeshadows = [{type:'eyeshadows', productId:1, img:'eyeshadow1.jpg', Name:'Eyeshadow 1', Price: "$35.00"},{type:'eyeshadows', productId:2, img:'eyeshadow2.jpg', Name:'Eyeshadow 2', Price: "$45.00"},{type:'eyeshadows', productId:3, img:'eyeshadow3.jpg', Name:'Eyeshadow 3', Price: "$48.00"}]

// const foundations = [{type:'foundations', productId:4,img:'foundation1.jpg', Name:'Foundation 1', Price: "$34.00"}, {type:'foundations', productId:5,img:'foundation2.jpg', Name:'Foundation 2', Price: "$30.00"}, {type:'foundations', productId:6,img:'foundation3.jpg', Name:'Foundation 3', Price: "$36.00"}]

// const lipsticks = [{type:'lipsticks', productId:7,img:'lipstk1.jpg', Name:'Lipstick 1', Price: "$25.00"}, {type:'lipsticks', productId:8,img:'lipstk2.jpg', Name:'Lipstick 2', Price: "$22.00"}, {type:'lipsticks', productId:9,img:'lipstk3.jpg', Name:'Lipstick 3', Price: "$28.00"}]

const products = [
    { type: 'eyeshadows', productId: 1, img: 'eyeshadow1.jpg', Name: 'Eyeshadow 1', Price: "$35.00" }, { type: 'eyeshadows', productId: 2, img: 'eyeshadow2.jpg', Name: 'Eyeshadow 2', Price: "$45.00" }, { type: 'eyeshadows', productId: 3, img: 'eyeshadow3.jpg', Name: 'Eyeshadow 3', Price: "$48.00" },
    { type: 'foundations', productId: 4, img: 'foundation1.jpg', Name: 'Foundation 1', Price: "$34.00" }, { type: 'foundations', productId: 5, img: 'foundation2.jpg', Name: 'Foundation 2', Price: "$30.00" }, { type: 'foundations', productId: 6, img: 'foundation3.jpg', Name: 'Foundation 3', Price: "$36.00" },
    { type: 'lipsticks', productId: 7, img: 'lipstk1.jpg', Name: 'Lipstick 1', Price: "$25.00" }, { type: 'lipsticks', productId: 8, img: 'lipstk2.jpg', Name: 'Lipstick 2', Price: "$22.00" }, { type: 'lipsticks', productId: 9, img: 'lipstk3.jpg', Name: 'Lipstick 3', Price: "$28.00" }
]
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { test: 'Welcome to my makeup store!' })
})

app.get('/lipsticks', (req, res) => {

    const lipsticks = products.filter(product=>product.type === 'lipsticks')

        res.render('lipsticks', { lipsticks: lipsticks })
})

app.get('/eyeshadows', (req, res) => {

    const eyeshadows = products.filter(product=>product.type === 'eyeshadows')
    res.render('eyeshadows', { eyeshadows: eyeshadows })
})

app.get('/foundations', (req, res) => {
    const foundations = products.filter(product=>product.type === 'foundations')
    res.render('foundations', { foundations: foundations })
})

app.get('/product/:productId',(req, res)=>{

    const {productId} = req.params;
    console.log('productId:', productId)

    const product = products.filter(elm=>elm.productId ==  productId)[0];

    console.log(product);

    res.render('product',{product})
})

let port = process.env.PORT || 3003;

app.listen(port, function () {
    console.log('Server listen on port', port)
})
