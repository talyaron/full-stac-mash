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

const foods = [{ name: 'avocado', calories: 100, itemId: 1},
                { name: 'egg', calories: 80, itemId: 2},
                { name: 'tomato', calories: 70, itemId: 3},
                {name: 'apple', calories: 90, itemId: 4}
        
            ];

const dailyMenu = [];

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//food-list router

app.get('/', (req, res) => {
    res.render('foodlist', { foods })
})


app.get('/dailymenu', (req, res) => {
    res.render('dailymenu', { })
})
////////////////////////////////////////////////////////////////////////
app.put('/api/update-calories', (req, res) => {
    console.log(req.body)

    const { itemId, newCalories } = req.body;
    console.log(itemId);
    console.log(newCalories)

    //go to the products
    let index = foods.findIndex(food => food.itemId == itemId)
    //find the product

    console.log('index', index)


    // change the price
    foods[index].calories = newCalories

    //responce with the new list of products
    //res.send(products)
    
    res.send(foods[index]);  // fixed
})

app.delete('/api/delete-food', (req, res) => {

    const { itemId } = req.body;

    //find the product by ID
    const index = foods.findIndex(food => food.itemId == itemId);
    console.log('index:', index);

    let food = foods[index];  // food that will be removed 

    //delete the product from the products
    foods.splice(index, 1);

   
    //return with new list of products
    res.send(food)
})


app.post('/api/add-food', (req, res) => {

    foods.push(req.body)
    console.log(foods)

    res.send(foods);
});



app.post('/api/add-food2menu', (req, res) => {

    // take itemId from req.body
    const { itemId } = req.body;
    // find the food by itemID (in foods array)

    const index = foods.findIndex(food => food.itemId == itemId);
    console.log('index:', index);

    dailyMenu.push(foods[index])
    console.log(dailyMenu)

    res.send(foods[index]);
})