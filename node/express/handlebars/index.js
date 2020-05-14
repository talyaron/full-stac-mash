const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.static('public'))

//mock data
const people = ['Ben', 'Josef', 'Rebeka']

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

let port = process.env.PORT || 3002;

app.listen(port, function () {
    console.log('Server listen on port', port)
})
