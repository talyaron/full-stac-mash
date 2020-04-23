function reversNumber(number){
    numberString = [];
    numberString = number.toString();
    console.log(numberString.length)
    numberArray = [];
   for(let i in numberString){
       console.log(numberString[i])
       numberArray.push(numberString[i]);
   }

    console.log(numberArray)
    numberArray.reverse();

    console.log(numberArray);
    
    let numbString ='';
    //make it a number
    numberArray.forEach(digit=>{
        numbString += digit
    })

    console.log(numbString);
    let x = parseInt(numbString)
    console.log(x);
    return x;
}

let x= reversNumber(23456);
console.log(x);