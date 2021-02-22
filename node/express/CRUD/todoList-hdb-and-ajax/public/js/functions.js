function addProduct() {
    fetch('/api/get-product')
        .then(res => res.json())
        .then(product => {
            console.log(product)
            document.getElementById('theProduct').innerText = product.name
        })
}

function updateItemtName(itemId) {
    let itemName = prompt('Enter new item name');
    console.log(itemName);

    fetch('/api/get-product', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ itemName, itemId })
    })
        .then(res => res.json())
        .then(item => {
            console.log(item)
            document.getElementById(`itme-id-${item.itemId}`).innerText = item.itemName
        });

}