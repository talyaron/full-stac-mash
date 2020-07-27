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

               var myobj = {image: '' , title: 'Nike FE/NOM Flyknit',price: '$140', discount: '15% discount', comission: 'Comission $5.20' , ttldiscount: '$119 after discount'};
    db.collection("cards").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        //db.close();
    });

    var myobj1 = {image: '' , title: 'Golf Jacket' , price: '$130', discount: '10% discount', comission: 'Comission $6.20' , ttldiscount: '$109 after discount'};
    db.collection("cards").insertOne(myobj1, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        //db.close();

    });

    // Start the application after the database connection is ready
    app.listen(4000, () => {
        console.log("Listening on port 4000");
    });

});

app.get("/api/get-all-cards", function (req, res) {
    db.collection("cards").find({}, (err, docs) => {
        const results = []
        docs.each(function (err, doc) {
            console.log(doc);

            if (doc) {
                results.push(doc)
            }
            else {
                res.send(results);
            }
        });
    });
});



app.post('/api/register', (req, res) => {
    console.log(req.body);

    //if email value === email value in database

    const { email, password } = req.body;
    console.log(email)


    db.collection("users").find({ email }, (err, docs) => {
        const results = []
        docs.each(function (err, doc) {
            console.log(doc);

            if (doc) {
                results.push(doc)
            }
            else {


                const index = results.findIndex(user => user.email === email);

                if (index == -1) {
                    //REGISTRATION IS ALLWOED

                    //users.push({email, password})
                    // console.log(users)

                    db.collection("users").insertOne({ email, password }, function (err, result) {  // add new user to DB

                        if (err) console.log(err);

                        console.log("new user added");

                        res.send({ success: true })

                    })
                    //res.send({success: true})

                } else {
                    res.send({ error: 'user allready exists' })
                }
            }

        });
    });
});

app.post('/api/login', (req, res) => {
    console.log(req.body);


    //get the inputs from the client (email, password)
    const { email, password } = req.body;
    console.log(email)


    db.collection("users").find({ email }, (err, docs) => {
        const results = []
        docs.each(function (err, doc) {
            console.log(doc);

            if (doc) {
                results.push(doc)
            } else {
                //check if the user exists in users // if not respoond with user doesnot exist
                const index = results.findIndex(user => user.email === email);
                const checkPass = results.findIndex(user => user.password === password);

                if (index == -1) {
                    res.send({ error: 'sorry, user does not exist' })
                } else {
                    // res.send({success: true})
                    //check if the passwors match
                } if (checkPass == -1 || index != checkPass) {
                    //if they dont match respond with login failure
                    res.send({ error: 'sorry, users password does NOT match' })

                }
                // if they match the respond with login sucessful
                else {
                    res.send({ success:true})
                }
            }


        });
    });
});



