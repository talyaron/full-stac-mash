function UpdateCals(itemId){

    console.log('update cals', itemId)
    let calories = prompt("What is the new Calorie count?");
    console.log(calories);

    fetch('/api/update-calories', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ itemId, newCalories: calories })
    })
        .then(responce => responce.json())
        .then(food => {

           // console.log(foods)
            //let foodsSTR = '';
           // foods.forEach(food => {
           //     foodsSTR += `<p>Name: ${food.name} Calories: ${food.calories}</p>`
            //})

            document.getElementById(`item-id-${itemId}`).innerHTML = "calories: " + food.calories;  // fixed

        });
};


function RemoveItem(itemId) {
        console.log(itemId)
        fetch('/api/delete-food', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ itemId })
    
        })
            .then(responce => responce.json())
            .then(food => {
    
                console.log(food)  
                document.getElementById(`remove-${food.itemId}`).innerHTML = '';
            })
            
    };
function AddItem(e){
    e.preventDefault();
    let { itemId, name, calories } = e.target.elements;
    itemId = itemId.value;
    name = name.value;
    calories = calories.value;

    fetch('/api/add-food', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, calories, itemId })
    })
        .then(responce => responce.json())
        .then(foods => {

        //console.log(foods) ;

        let foodsSTR = document.getElementById('NewFoods').innerHTML
        foodsSTR += 
        `<span id = "remove-${itemId}">  <p> Food: ${name} <span id="item-id-${itemId}">calories: ${calories}</span>
        <button onclick="UpdateCals('${itemId}')">Update</button>
        <button onclick="RemoveItem('${itemId}')">Remove</button>
        <button onclick="Move2menu('${itemId}')">Add to Daily Menu!</button></p> </span>`

        document.getElementById('NewFoods').innerHTML = foodsSTR;
        });

}
    



function Move2menu(itemId){
    
    fetch('/api/add-food2menu', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  itemId })
    })
    .then(responce => responce.json())
    .then(added => {

    console.log(added);

    let name =  added.name; //'apple'// name of the last element of array dailyMenu
    let calories = added.calories; // 

    let foodsSTR = document.getElementById('DailyMenu').innerHTML
    foodsSTR += 
    `<span id = "remove-${itemId}">  <p> Food: ${name} <span id="item-id-${itemId}">calories: ${calories}</span>
    <button onclick="UpdateCals('${itemId}')">Update</button>
    <button onclick="RemoveItem('${itemId}')">Remove</button>
    <button onclick="Move2menu('${itemId}')">Add to Daily Menu!</button></p> </span>`


    document.getElementById('DailyMenu').innerHTML = foodsSTR;
    });

}


