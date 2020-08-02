const express = require('express');
const app = express();
const url = "mongodb+srv://tal1:SA7b7sT6TOsrpovW@tal-test1-m39if.mongodb.net/test?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var bodyParser = require('body-parser')


// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());




let db;
// Initialize connection once
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, database) {
    if (err) throw err;

    db = database.db("mydb");
    // db.createCollection("users", function (err, res) {
    //               if (err) throw err;
    //               console.log("Users collection created!");
    //               //db.close();
    //           });

    // var myobj = { email: 'masha.alarcon@gmail.com' , password: '1234'};
    // db.collection("users").insertOne(myobj, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     //db.close();
    // });

    // var myobj1 = { email: 'ivlidia@gmail.com' , password: '5678'};
    // db.collection("users").insertOne(myobj1, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     //db.close();

    // });


    //  db.createCollection("cards", function (err, res) {
    //               if (err) throw err;
    //               console.log("Cardss collection created!");
    //               //db.close();
    //           });

     // var myobj = {image: '' , title: 'Nike FE/NOM Flyknit',price: '$140', discount: '15% discount', comission: 'Comission $5.20' , ttldiscount: '$119 after discount'};
    // db.collection("cards").insertOne(myobj, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     //db.close();
    // });

    // var myobj1 = {image: '' , title: 'Golf Jacket' , price: '$130', discount: '10% discount', comission: 'Comission $6.20' , ttldiscount: '$109 after discount'};
    // db.collection("cards").insertOne(myobj1, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     //db.close();

    // });

    // Start the application after the database connection is ready
    app.listen(4000, () => {
        console.log("Listening on port 4000");
    });

});


app.post('/api/register', (req, res) => {
    const newUser = req.body;
    console.log(newUser)

    db.collection("users").find({ email: newUser.email }).toArray(function(err, results) {
        if (err) throw err;
        //console.log(results);

        if (results.length != 0) {
                console.log('user already exists');
                res.send({ error: "user already exists" })
        } else {
            db.collection("customers").insertOne(newUser, function (err, result) {
                if (err) console.log(err);
                console.log("new user added");
                //console.log(result);
                res.send({ success:true, _id: result.ops[0]._id});  // send back the added user  _id
            })
        }
    });
});


app.post('/api/login',(req, res)=>{
    //get the inputs from the client (email, password)
    const { email, password } = req.body;
    console.log(email)

    db.collection("users").find({ email: email }).toArray(function(err, results) {
        if (err) throw err;
        //console.log(results);

        if (results.length == 0) {  //check if the user exists in users - if not respond with user does not exist
                res.send({ error: "user doesn't exist" })
        } else {
            //check if the passwords match
            if (results[0].password === password) {
                res.send( { success:true, _id: results[0]._id} );  // send back the added user  _id
            } else {
                res.send({ error: "wrong password!" })
            }
        }
    });
})



app.get('/api/get-all-cards', (req, res) => {
    db.collection("cards").find({ }).toArray(function(err, docs) {
        if (err) console.log('Error', err);
        res.send(docs);
    })
})


app.get('/api/get-user-info/:id', (req, res) => {
    console.log(req.params.id)
    const id = new ObjectID(req.params.id);
    //find the specific product by id
    const myQuery = { _id: id };

    db.collection('users').findOne(myQuery, (err, result) => {
        if (err) console.log('Error', err);
        console.log('get-user-info');
        console.log(result);
        res.send(result);
    });
})

app.get('/api/get-card-by-id/:id', (req, res) => {
    const id = new ObjectID(req.params.id);
    const myQuery = { _id: id };
    db.collection("cards").findOne(myQuery, (err, result) => {
        if (err) console.log('Error', err);
        console.log('get-card-by-id');
        console.log(result);
        res.send(result);
    })
})