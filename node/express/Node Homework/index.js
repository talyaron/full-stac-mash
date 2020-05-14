const express = require('express');

const app = express();

const port = 3004;

app.listen(port, () =>{
    console.log(`server listen on port ${port}`)
});

app.use(express.static('images'))
/*
1) write a server that the user enter a food in the URL and the server 
respond with the calories
2) the same thing, but now, it will also return the picture of the food
*/


const foods = [{food: "avocado", calories: "120", img:"/avocado.jpg"},{food: "pinapple", calories: "200", img:"/pinapple.jpg"}]

app.get('/foods/:food', (req, res)=>{
    const { food } = req.params;
    let calories = false;
    let image = false;


    // searching for the specific food
    for(let i in foods){
        if (foods[i].food === food){
            calories = foods[i].calories;
            image = foods[i].img;
            break
        }
    }

    if (calories === false){
        res.send(`Sorry no calories found for ${food}`)
    
    } else{
        console.log('image:', image)
        res.send(`<h3>${food} has ${calories} calories!<h3><img src = "../images${image}">`)
    }
});

/*
3) build a server that holds data on store items
4) when the user write in the url the name of the item, the server shows the picture
  of the item and the price.
5) the user can enter in a different url, price range ( /getByPrive/100-300),
  and the server respond with the all the items with prices in the range.
 */

const merchandise = [{item: "notebook", price: "3", pic:  "./images/notebook.jpg"},
                     {item: "color pens", price: "6", pic: "./images/colorPens.jpg"},
                     {item: "stapler", price: "8", pic: "./images/stapler.jpg"}]

 app.get('/store/:item', (req, res)=>{
    const { item } = req.params;
    let price = false;

for (let i in merchandise){

    if (item === merchandise[i].item){
        price = merchandise[i].price;
        break
    }
}
if(price === false){
    res.send(`Sorry no price found for ${item}`)
} else{
    res.send(`The price for ${item} is $${price} dollars.`)
}


 });

 



 
 app.get('/getByPrice/:range', (req, res)=>{   // '4-8'
    const { range } = req.params;
    let arr = range.split("-");  // ['4','8']
    let min = parseInt(arr[0]); // 4
    let max = parseInt(arr[1]);  // 8
    let items = '';   //string
    for (let i in merchandise) {
        if(merchandise[i].price >= min && merchandise[i].price <= max) {
            items = items + ` ${merchandise[i].item} (price ${merchandise[i].price} dollars),`
        }
    }
    // items == 'color pens (price 6), stapler (price 8)'

    // send all items 
    if (items.length == 0) {
        res.send(`No items in this range ${range}`)
    } else {
        res.send(`Items in range ${range} are ${items}`)
    }
 })
 
 
app.get('/:item', (req, res)=>{
    const { item } = req.params;
    let price = false;
    let picture = false;

for (let i in merchandise){

    if (item === merchandise[i].item){
        price = merchandise[i].price;
        picture = merchandise[i].pic;
        break
    }
}

if(price === false){
    res.send(`Sorry no price found for ${item}`)
} else{
    res.send(`<h2>The price for ${item} is $${price} dollars.<h2> <img src = ${picture}>`)
}
 });



 