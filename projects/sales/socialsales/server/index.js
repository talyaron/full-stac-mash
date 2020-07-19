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

app.get("/api/get-all-products", function (req, res) {
    db.collection("products").find({}, (err, docs) => {
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

app.get('/api/get-all-lipstick', (req, res) => {
    db.collection('products').find({ type: 'lipstick' }, (err, docs) => {
        const results = []
        docs.each(function (err, doc) {
            if (err) console.log('Error', err);


            console.log(doc);

            if (doc) {
                results.push(doc)
            }
            else {
                res.send(results);
            }
        });
    })
})

app.put('/api/update-color', (req, res) => {
    const { product, newColor } = req.body;
    console.log(product);
    console.log(newColor)
    console.log(product._id)
    const id = new ObjectID(product._id);
    //find the specific product and update it
    const myQuery = { _id: id };

    const newValues = { $set: { color: newColor } };

    db.collection("products").updateOne(myQuery, newValues, function (err, res) {
        if (err) console.log(err);
        console.log("1 document updated");
       
    });

    res.send({ success: true })
})



