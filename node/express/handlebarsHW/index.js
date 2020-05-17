const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.static('public'))

//mock data
const eyeshadows = [{img:'eyeshadow1.jpg', Name:'Eyeshadow 1', Price: "$35.00"},{img:'eyeshadow2.jpg', Name:'Eyeshadow 2', Price: "$45.00"},{img:'eyeshadow3.jpg', Name:'Eyeshadow 3', Price: "$48.00"}]

const foundations = [{img:'foundation1.jpg', Name:'Foundation 1', Price: "$34.00"}, {img:'foundation2.jpg', Name:'Foundation 2', Price: "$30.00"}, {img:'foundation3.jpg', Name:'Foundation 3', Price: "$36.00"}]

const lipsticks = [{img:'lipstk1.jpg', Name:'Lipstick 1', Price: "$25.00"}, {img:'lipstk2.jpg', Name:'Lipstick 2', Price: "$22.00"}, {img:'lipstk3.jpg', Name:'Lipstick 3', Price: "$28.00"}]

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { test: 'Welcome to my makeup store!' })
})

app.get('/lipsticks', (req, res) => {
    
    res.render('lipsticks', { lipsticks: lipsticks })
})

app.get('/eyeshadows',(req, res)=>{
    res.render('eyeshadows',{eyeshadows: eyeshadows})
})

app.get('/foundations',(req, res)=>{
    res.render('foundations',{foundations: foundations})
})
let port = process.env.PORT || 3003;

app.listen(port, function () {
    console.log('Server listen on port', port)
})
