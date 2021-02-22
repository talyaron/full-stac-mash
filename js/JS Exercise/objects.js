// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:

const student = {
    name: 'Moti',
    surename: 'Cohen',
    age: 31

}

//Loop
for (let i in student) {
    console.log(`${i}: ${student[i]}`)
}

//ECMAscript 6
Object.keys(student).forEach(item => {
    console.log(item, student[item]);
})

//2. Write a JavaScript program to delete the
// rollno property from the following object. Also print the object before or after deleting the property.

const student1 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student1)
delete student1.rollno;
console.log(student1)

//3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor


const student2 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let counter = 0;
for (let i in student2) {
    console.log(`${i}: ${student[i]}`)
    counter++;
}

console.log(counter);

//4. Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of 
//the following books.

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    for (let i = 0; i<library.length;i++){
        console.log(`author: ${library[i].author} ${library[i].title} ${library[i].readingStatus}`)
    }

    library.forEach(book=>{
        console.log(`author: ${book.author} ${book.title} ${book.readingStatus}`)
    })


