var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://tal1:SA7b7sT6TOsrpovW@tal-test1-m39if.mongodb.net/test?retryWrites=true&w=majority";

const argv = require('yargs').argv



if (argv.c) {
    try {
        MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
            if (err) throw err;
            console.log("Database created!");

            var dbo = db.db("mydb");
            // dbo.createCollection("customers", function (err, res) {
            //     if (err) throw err;
            //     console.log("Collection created!");
            //     db.close();
            // });

            var myobj = { name: "Masha", address: "Highway 101" };
            dbo.collection("customers").insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        })
    } catch (err) {
        console.log(err)
    }
}

if (argv.r) {
    try {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            dbo.collection("customers").find({ name: 'Masha' }).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
            });
        });
    } catch (err) {
        console.log(err)
    }
}

if (argv.u) {
    try {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myquery = { name: "Masha" };
            var newvalues = { $set: { address: "Haifa" } };
            dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
                db.close();
            });
        });
    } catch (err) {
        console.log(err)
    }
}

if(argv.d){
    try{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myquery = { address: 'Haifa' };
            dbo.collection("customers").deleteOne(myquery, function(err, obj) {
              if (err) throw err;
              console.log("1 document deleted");
              db.close();
            });
          });
    } catch(err){
        console.log(err)
    }
}