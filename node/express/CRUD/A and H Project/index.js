const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const exphbs = require('express-handlebars');

app.use(express.static('public'))

const path = require('path');


const port = process.env.PORT || 3001;
app.listen(port, () => { console.log('server listen on port', port) })

const foods = [{ name: 'avocado', calories: 100 },
                { name: 'egg', calories: 80 },
                { name: 'tomato', calories: 70},
                {name: 'apple', calories: 90}
        
            ]

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//food-list router

app.get('/foodlist', (req, res) => {

    res.render('foods', { foods })
})