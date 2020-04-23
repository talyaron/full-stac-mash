const myItem = document.getElementById("selectFood");

const addBtn = document.getElementById("addBtn");

const addedItems = document.getElementById('addedItems');



let Avocado = {
    name: 'Avocado - 160 calories',
    calories: 160
}

let Egg = {
    name: 'Egg - 155 calories',
    calories: 155
}

let Tomato = {
    name: 'Tomato - 24 calories',
    calories: 24
}

let Apple = {
    name: 'Apple - 95 calories',
    calories: 95
}

let totalCalories = 0;

console.dir(addBtn)
addBtn.addEventListener("click", e => {
    console.log(myItem.value);

    var newDiv = document.createElement('div')

        var node = document.createElement("p");                 
        var textnode = document.createTextNode(myItem.value);      
        node.appendChild(textnode);  
        newDiv.appendChild(node)
  
     var newButton = document.createElement('button');   
     var textButton = document.createTextNode('Remove Item') 
     newButton.appendChild(textButton)
     newDiv.appendChild(newButton)

     newDiv.className = "addedFood"

     if (myItem.value !== 'Pick an item') {
        addedItems.appendChild(newDiv);
     }

    

    if (myItem.value == Avocado.name) {
        totalCalories = totalCalories + Avocado.calories
    } else if (myItem.value == Egg.name) {
        totalCalories = totalCalories + Egg.calories
    } else if (myItem.value == Tomato.name) {
        totalCalories = totalCalories + Tomato.calories
    } else if (myItem.value == Apple.name) {
        totalCalories = totalCalories + Apple.calories
    }

    let totalCal = document.getElementsByTagName('h5')[0]
    totalCal.innerHTML = `Total calories: ${totalCalories}`

    console.log(totalCalories)
    myItem.value = 'Pick an item';

});

let foods = document.getElementsByClassName("addedFood")
console.log(foods)

