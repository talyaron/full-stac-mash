const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const exphbs = require('express-handlebars');

app.use(express.static('public'))

const path = require('path');

const todos = [{ itemName: 'the big task', itemId: 1 }]

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//login router
app.get('/', (req, res) => {
    res.render('login', {})
})

app.get('/todolist', (req, res) => {

    res.render('todo', { todos })
})

app.get('/api/get-product', (req, res) => {
    res.send({ name: 'the big task', id: 23 })
})

app.put('/api/get-product', (req, res) => {

    const { itemName, itemId } = req.body;
    //find in in the array
    console.log(itemName, itemId)

    const index = todos.findIndex(item=>item.itemId == itemId);
    todos[index].itemName = itemName;

    res.send(todos[index]);

});


const port = process.env.PORT || 3003;
app.listen(port, () => { console.log('server listen on port', port) })