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
    

    // Start the application after the database connection is ready
    app.listen(4000, () => {
        console.log("Listening on port 4000");
    });

});


app.post('/api/register', (req, res) => {
    const {img, password, name} = req.body;
  console.log(img, password, name   )

    db.collection("users").find({ name:name }).toArray(function (err, results) {
        if (err) throw err;
        //console.log(results);

        if (results.length != 0) {
            console.log('user already exists');
            res.send({ error: "user already exists" })
        } else {
            db.collection("customers").insertOne({img, password, name}, function (err, result) {
                if (err) console.log(err);
                console.log("new user added");
                //console.log(result);
                res.send({ success: true, user: result.ops[0]});  // send back the added user  _id
            })
        }
    });
});


app.post('/api/login', (req, res) => {
    //get the inputs from the client (email, password)
    const { email, password } = req.body;
    console.log(email)

    db.collection("users").find({ email: email }).toArray(function (err, results) {
        if (err) throw err;
        //console.log(results);

        if (results.length == 0) {  //check if the user exists in users - if not respond with user does not exist
            res.send({ error: "user doesn't exist" })
        } else {
            //check if the passwords match
            if (results[0].password === password) {
                res.send({ success: true, _id: results[0]._id });  // send back the added user  _id
            } else {
                res.send({ error: "wrong password!" })
            }
        }
    });
})



// app.get('/api/get-all-cards', (req, res) => {
//     db.collection("cards").find({}).toArray(function (err, docs) {
//         if (err) console.log('Error', err);
//         res.send(docs);
//     })
// })


// app.get('/api/get-user-info/:id', (req, res) => {  
//     console.log(req.params.id)
//     const id = new ObjectID(req.params.id);
//     //find the specific product by id
//     const myQuery = { _id: id };

//     db.collection('users').findOne(myQuery, (err, result) => {
//         if (err) console.log('Error', err);
//         console.log('get-user-info');
//         console.log(result);
//         res.send(result);
//     });
// })

// app.put('/api/put-user-info/:id', (req, res) => {
//     const { card  } = req.body;
//     console.log('put-user-info');
//     console.log(card._id)
//     console.log(req.params.id) // user ID
//     const id = new ObjectID(req.params.id);
//     //find the specific product by id
//     const myQuery = { _id: id };

//     db.collection('users').findOne(myQuery, async (err, result) => {
//         if (err) console.log('Error', err);
//         //res.send(result);
//         console.log(result);
//         let cardIdx = result.cards.findIndex((c) =>  c.id == card._id )
//         console.log("cardIdx:  " + cardIdx);

//         let userCards = [...result.cards];  // clone array
//         userCards[cardIdx].type = (result.cards[cardIdx].type == 'currentSales')? 'hotSales' : 'currentSales';

//         const newVal = { $set: { cards: userCards } };

//         await db.collection("users").updateOne(myQuery, newVal, function (err, res) {
//                     if (err) console.log(err);
//                     console.log("1 document updated"); 
//                 });
//         res.send({ success: true })
//     });

// })



// app.get('/api/get-user-cards/:userId', (req, res) => {
//     try {
//         const { userId } = req.params;
//         console.log(userId);

//         const userIdObj = new ObjectID(userId);
//         const myQuery = { _id: userIdObj };

//         //get user's cards
//         db.collection('users').findOne(myQuery, async (err, userData) => {
//             if (err) console.log('Error', err);
            
//             const cardsInUser = userData.cards;
//             console.log(cardsInUser)

//             if (cardsInUser && Array.isArray(cardsInUser)) {

//                 //build queries
//                 const productQueriesHotsales = [];
//                 const productQueriesCurrentSales = [];

//                 cardsInUser.forEach(card => {
//                     const productID = new ObjectID(card.id);
//                     if (card.type === 'currentSales') {
//                         productQueriesCurrentSales.push({ _id: productID })
//                     } else if (card.type === 'hotSales') {
//                         productQueriesHotsales.push({ _id: productID });
//                     }
//                 })
//                 //console.log(productQueriesCurrentSales)

//                 //run queries
//                 const cardsCurrentSales = (productQueriesCurrentSales.length > 0)? await db.collection('cards').find({ "$or": productQueriesCurrentSales }).toArray() : [];
//                 const cardsHotSales =     (productQueriesHotsales.length > 0)?     await db.collection('cards').find({ "$or": productQueriesHotsales }).toArray()     : [];
//                 //console.log(cardsCurrentSales) 

//                 res.send({success:true, cardsCurrentSales,cardsHotSales});
//             } else {
//                 res.send({ success: false })
//             }
//         })
//     } catch (err) {
//         console.log(err)
//     }
// })
