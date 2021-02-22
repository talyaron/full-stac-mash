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
    { userID: 1, name: 'Masha', email: 'masha.alarcon@gmail.com', password: '12345677', address: 'California', phoneNumber: '123456' },
    { userID: 2, name: 'Lidia', email: 'ivlidia@gmail.com', password: '12345678', address: 'Haifa', phoneNumber: '987654' },
    { userID: 3, name: 'Tal', email: 'tal.yaron@gmail.com', password: '12345679', address: 'Tel-Aviv', phoneNumber: '654321' }
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



    let { userID } = req.params; 
    userID = parseInt(userID);
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

app.post('/api/send-form', (req, res) => {
    console.log(req.body);

    // console.log(a,b,c);
    res.send({ success: true })
})

app.post('/api/register', (req, res) => {
    console.log(req.body);

    //if email value === email value in database

    const { email, pass1 } = req.body;
    console.log(email)

    const index = users.findIndex(user => user.email === email);

    if (index == -1) {
        //REGISTRATION IS ALLWOED
       const userID = guidGenerator();
        users.push({userID,email, password: pass1})
        console.log(users)
        res.send({success: true})
       
    } else {
        res.send({ error: 'user allready exists' })
    }


   
})

app.post('/api/login',(req, res)=>{
    console.log(req.body);


    //get the inputs from the client (email, password)
    const { email, password } = req.body;
    console.log(email)

    //check if the user exists in users // if not respoond with user doesnot exist
    const index = users.findIndex(user => user.email === email);
    const checkPass = users.findIndex(user => user.password === password);
    
    if (index == -1) {
        res.send({ error: 'sorry, user does not exist' })
    } else {
       // res.send({success: true})
    //check if the passwors match
        if (checkPass == -1 || index != checkPass) {
             //if they dont match respond with login failure
            res.send({ error: 'sorry, users password does NOT match' })
        
        }
         // if they match the respond with login sucessful
        else{
            res.send({success: 'Login successful!'})
        }
    }
    
   
   




    

    //* if login succesfull, redirect the client to "home"

})

app.listen(port, () => { console.log(`listen on port ${port}`) })






function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}



