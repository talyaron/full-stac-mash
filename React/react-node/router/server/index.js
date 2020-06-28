const express = require('express')
const app = express();
const port = process.env.PORT || 3200;

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const text = { "text": "Hi Masha and Lidia and Tal" };
const fullName = { "fullName": "Masha Alarcon" };
const number = { "number": "120" };
const number2 = { "number2": "68" };

const users = [
    { userID: 1, name: 'Masha', address: 'California', phoneNumber: '123456'},
    { userID: 2, name: 'Lidia', address: 'Haifa', phoneNumber:'987654' },
    { userID: 3, name: 'Tal', address: 'Tel-Aviv', phoneNumber:'654321'}
]

app.get('/api/hi', (req, res) => {
    res.send(text)
});

app.get('/api/date', (req, res) => {
    res.send({ year: new Date().getFullYear() })
});

app.get('/api/fullName', (req, res) => {
    res.send(fullName);
});

app.get('/api/number', (req, res) => {
    res.send(number);
});

app.get('/api/number2', (req, res) => {
    res.send(number2);
});

app.get('/api/users/:userID', (req, res) => {



    let  { userID } = req.params;
    userID =  parseInt(userID); 
    console.log('userID', typeof userID)

    const index = users.findIndex(user => user.userID === userID);
    console.log('index', index)

    if (index === -1) {
        res.send({ res: "No user was found with this ID" })
    } else {
        let user = users[index];

        res.send({ name: user.name, address: user.address, phoneNumber: user.phoneNumber })
    }

})

app.listen(port, () => { console.log(`listen on port ${port}`) })










