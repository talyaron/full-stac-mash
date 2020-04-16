const message = document.getElementById("textbox");

const btnSend = document.getElementById("btnSend");
console.dir(btnSend)
btnSend.addEventListener("click", e => {
console.log(message.value)

});