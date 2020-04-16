const message = document.getElementById("textbox");

const btnSend = document.getElementById("btnSend");
const myMessages = document.getElementById('myMessages');

console.dir(btnSend)
btnSend.addEventListener("click", e => {
    console.log(message.value);

    //add a child
    var node = document.createElement("p");                 // Create a <li> node
    var textnode = document.createTextNode(message.value);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <p>
    myMessages.appendChild(node);     // Append <li> to <ul> with id="myList" 


    message.value = '';
});