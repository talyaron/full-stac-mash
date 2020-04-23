const myItem = document.getElementById("selectFood");

const addBtn = document.getElementById("addBtn");

const addedItems = document.getElementById('addedItems');
const foodList = [];

const items = [];

let foodsObj = {

    avocado: {
        name: 'Avocado',
        calories: 160
    },
    egg: {
        name: 'Egg',
        calories: 155
    },
    tomato: {
        name: 'Tomato',
        calories: 24
    },
    apple: {
        name: 'Apple',
        calories: 95
    }
}

let totalCalories = 0;

console.dir(addBtn)
addBtn.addEventListener("click", e => {

    try {

        //assertion
        if(!{}.hasOwnProperty.call(foodsObj,myItem.value )) throw `The selected item dosnt exist in foodsObj (${myItem.value})`
        
        let food = foodsObj[myItem.value]

        //add the food to the list
        foodList.push(food)

        printFoodListToDOM();
    } catch (err) {
        console.info(err)
    }
});

let foods = document.getElementsByClassName("addedFood")
console.log(foods)

function removeItem(itemNumber) {

    //remove the element
    foodList.splice(itemNumber, 1);

    printFoodListToDOM()

}


function printFoodListToDOM() {
    //wiil reprint on the dom
    let domString = ''; let calories = 0;
    foodList.map((foodInList, index) => {
        domString += `<div class="addedFood"><p>${foodInList.name}</p><button onclick='removeItem(${index})'>Remove Item</button></div>`;
        calories += foodInList.calories;
    })

    domString += `<h5>Total Calories: ${calories}</h5>`

    document.getElementById('addedItems').innerHTML = domString;
}