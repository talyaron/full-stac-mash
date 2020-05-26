
function getAllProducts() {
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
}

function getLipsticks() {

    fetch('/api/get-lipsticks')
        .then(responce => responce.json())
        .then(res2 => {

            console.log(res2)

            let productsSTR = '';
            res2.forEach(product => {
                productsSTR += `<p>Type: ${product.type}  <span onclick='updateAll("${product.productId}", "${product.type}")'> ProductId: ${product.productId} </span>
                 Name: ${product.name} <span onclick='updatePrice("${product.productId}")'>Price: ${product.price}$</span> <img src="img/${product.img}" alt="some lipstick" > </p>`
            })

            document.getElementById('lipsticks').innerHTML = productsSTR;
        });
}

function getAllFoundation() {
    fetch('/api/get-foundations')
        .then(responce1 => responce1.json())
        .then(res3 => {

            console.log(res3)

            let productsSTR1 = '';
            res3.forEach(product => {
                //productsSTR1 += `<p>Type: ${product.type} ProductId: ${product.productId} Name: ${product.name} Price: ${product.price}$ <img src="img/${product.img}" alt="some lipstick" > </p>`
                productsSTR1 += `<p>Type: ${product.type}  <span onclick='updateAll("${product.productId}", "${product.type}")'> ProductId: ${product.productId} </span> 
                <span onclick='updateName("${product.productId}")'>Name: ${product.name}</span> 
                Price: $${product.price} <img src="img/${product.img}" alt="some lipstick" > </p>`
            })

            document.getElementById('foundations').innerHTML = productsSTR1;
        });
}
function getEyeShadows() {
    fetch('/api/get-eyeshadows')
        .then(responce2 => responce2.json())
        .then(res4 => {

            console.log(res4)

            let productsSTR2 = '';
            res4.forEach(product => {
                productsSTR2 += `<p><span onclick='updateType("${product.productId}")'>Type: ${product.type}</span>
                <span onclick='updateAll("${product.productId}", "${product.type}")'> ProductId: ${product.productId} </span>
                Name: ${product.name} Price: $${product.price} <img src="img/${product.img}" alt="some lipstick" > </p>`
            })

            document.getElementById('eyeshadows').innerHTML = productsSTR2;
        });

    }

function addProduct(e) {
    e.preventDefault();

    console.log(e)

    let { type, productId, img, name, price } = e.target.elements;
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
        body: JSON.stringify({ type, productId, img, name, price })
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

function updatePrice(productId) {
    console.log('update price', productId)
    let price = prompt("What is the new price?");
    console.log(price);

    fetch('/api/update-price', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, newPrice:price })
    })
        .then(responce => responce.json())
        .then(products => {

            console.log(products)
            let productsSTR = '';
            products.forEach(product => {
                productsSTR += `<p>Type: ${product.type} ProductId: ${product.productId} Name: ${product.name} 
                <span onclick='updatePrice("${product.productId}")'>Price: $${product.price}</span> <img src="img/${product.img}" alt="some lipstick" > </p>`
            })

            document.getElementById('lipsticks').innerHTML = productsSTR;
           
        });
}
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function updateName(productId) {
    console.log('update name', productId)
    let name= prompt("What is the new name?");
    console.log(name);

    fetch('/api/update-name', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, newName:name })
    })
        .then(responce => responce.json())
        .then(products => {

            console.log(products)
            let productsSTR = '';
            products.forEach(product => {
                productsSTR += `<p>Type: ${product.type} ProductId: ${product.productId} 
                <span onclick='updateName("${product.productId}")'>Name: ${product.name}</span> 
                Price: $${product.price} <img src="img/${product.img}" alt="some lipstick" > </p>`
            })

            document.getElementById('foundations').innerHTML = productsSTR;
           
        });
};

/////////////////////////////////////////////////////////////////////////////////////////////


function updateType(productId) {
    console.log('update type', productId)
    let type = prompt("What is the new type?");
    console.log(type);

    fetch('/api/update-type', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, newType:type })
    })
        .then(responce => responce.json())
        .then(products => {

            console.log(products)
            let productsSTR = '';
            products.forEach(product => {
                productsSTR += `<p><span onclick='updateType("${product.productId}")'>Type: ${product.type}</span>
                ProductId: ${product.productId} Name: ${product.name} Price: $${product.price} 
                <img src="img/${product.img}" alt="some lipstick" > </p>`
            });

            document.getElementById('eyeshadows').innerHTML = productsSTR;
           
        });
}; 

///////////////////////////////////////////////////////////////

function updateAll(productId, type) {   
    let newType = prompt("What is the new type?");
    let newName = prompt("What is the new name?");
    let newPrice = prompt("What is the new price?");
    console.log(productId, type, newType, newName, newPrice);

    fetch('/api/update-all', {                   // PUT
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, type, newType, newName, newPrice })
    })
    .then(responce => responce.json())
    .then(products => {

            console.log(products)
            let productsSTR = '';
            products.forEach(product => {
                productsSTR += `<p> <span onclick='updateAll("${product.productId}", "${product.type}")'> ProductId: ${product.productId} </span>
                                    Name: ${product.name}
                                    <span onclick='updateType("${product.productId}", "${product.type}")'> Type: ${product.type}  </span>
                                    <span onclick='updatePrice("${product.productId}", "${product.type}")'> Price: ${product.price}$</span> 
                                    <img src="img/${product.img}" alt="some lipstick" > </p>`
            })
            
            document.getElementById(type).innerHTML = productsSTR;
    });
}