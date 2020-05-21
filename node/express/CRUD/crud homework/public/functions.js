fetch('/api/get-products')
.then(responce => responce.json())
.then(res2 => {
    
    console.log(res2)

    let productsSTR = '';
    res2.forEach(product => {
        productsSTR += `<p>Type: ${product.type} ProductId: ${product.productId} Name: ${product.name} Price: ${product.price}$ <img src="img/${product.img}" alt="some lipstick" > </p>`
    })

    document.getElementById('products').innerHTML = productsSTR;
});

fetch('/api/get-lipsticks')
.then(responce => responce.json())
.then(res2 => {
    
    console.log(res2)

    let productsSTR = '';
    res2.forEach(product => {
        productsSTR += `<p>Type: ${product.type} ProductId: ${product.productId} Name: ${product.name} Price: ${product.price}$ <img src="img/${product.img}" alt="some lipstick" > </p>`
    })

    document.getElementById('lipsticks').innerHTML = productsSTR;
});

fetch('/api/get-foundations')
.then(responce1 => responce1.json())
.then(res3 => {
    
    console.log(res3)

    let productsSTR1 = '';
    res3.forEach(product => {
        productsSTR1 += `<p>Type: ${product.type} ProductId: ${product.productId} Name: ${product.name} Price: ${product.price}$ <img src="img/${product.img}" alt="some lipstick" > </p>`
    })

    document.getElementById('foundations').innerHTML = productsSTR1;
});

fetch('/api/get-eyeshadows')
.then(responce2 => responce2.json())
.then(res4 => {
    
    console.log(res4)

    let productsSTR2 = '';
    res4.forEach(product => {
        productsSTR2 += `<p>Type: ${product.type} ProductId: ${product.productId} Name: ${product.name} Price: ${product.price}$ <img src="img/${product.img}" alt="some lipstick" > </p>`
    })

    document.getElementById('eyeshadows').innerHTML = productsSTR2;
});

function addProduct(e) {
e.preventDefault();

console.log(e)

let {type, productId, img, name, price } = e.target.elements;
type = type.value;
productId = productId.value;
img = img.value;
name = name.value;
price = price.value;
console.log(type, productId, img, name, price);

fetch('/api/add-product', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({type, productId, img, name, price})
})
.then(responce => responce.json())
.then(res2 => {
    console.log('first line')
    console.log(res2)

    let producrtsSTR = '';
    res2.forEach(product => {
        producrtsSTR += `<p>Type: ${product.type} ProductId: ${product.productId} <img src="img/${product.img}" alt="some lipstick" >  Name: ${product.name} Price: $${product.price}</p>`
    })

    document.getElementById('products').innerHTML = producrtsSTR;
});
}
