const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.static('public'))

//mock data
const people = ['Lidia', 'Philip', 'Masha']

const pictures = [{img:'flower1.jpg', name:'Flower 1', show:true}, {img:'flower2.jpeg', name:'Flower 2', show:false}]

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { test: 'What a wanderfull world, and thhis is a template', people:people })
})

app.get('/about', (req, res) => {
    
    res.render('about', { user: 'Tal', famelyName: 'Yaron', people: people })
})

app.get('/pictures',(req, res)=>{
    res.render('pictures',{pictures:pictures})
})

let port = process.env.PORT || 3002;

app.listen(port, function () {
    console.log('Server listen on port', port)
})
