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

            //      dbo.createCollection("products", function (err, res) {
            //      if (err) throw err;
            //      console.log("Producs collection created!");
            //      db.close();
            //  });
           
            // var myobj = { name: "Masha", address: "Highway 101" };
            // dbo.collection("customers").insertOne(myobj, function (err, res) {
            //     if (err) throw err;
            //     console.log("1 document inserted");
            //     db.close();
            // });
            var myobj = { type: "lipstick", id: "1",name: "lipstick1", color:"red" };
            dbo.collection("products").insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });

            var myobj1 = { type: "lipstick", id: "2", name: "lipstick2", color:"pink" };
            dbo.collection("products").insertOne(myobj1, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
            var myobj2 = { type: "lipstick", id: "3", name: "lipstick3", color:"ruby red" };
            dbo.collection("products").insertOne(myobj2, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });

            var myobj3 = { type: "eyeshadow", id: "4", name: "eyeshadow1", color: "brown" };
            dbo.collection("products").insertOne(myobj3, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });

            var myobj4 = { type: "eyeshadow", id: "5", name: "eyeshadow2", color:"blue" };
            dbo.collection("products").insertOne(myobj4, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
           });

           var myobj5 = { type: "eyeshadow", id: "6", name: "eyeshadow3", color:"violet" };
           dbo.collection("products").insertOne(myobj5, function (err, res) {
               if (err) throw err;
               console.log("1 document inserted");
               db.close();
         });
             var myobj6 = { type: "foundation", id: "7", name: "foundation1", color:"light" };
             dbo.collection("products").insertOne(myobj6, function (err, res) {
             if (err) throw err;
             console.log("1 document inserted");
             db.close();
            });

            var myobj7 = { type: "foundation", id: "8", name: "foundation2", color:"medium" };
            dbo.collection("products").insertOne(myobj7, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
           });
        var myobj8 = { type: "foundation", id: "9", name: "foundation3", color:"dark" };
        dbo.collection("products").insertOne(myobj8, function (err, res) {
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
            // var dbo = db.db("mydb");
            // dbo.collection("customers").find({ name: 'Masha' }).toArray(function (err, result) {
            //     if (err) throw err;
            //     console.log(result);
            //     db.close();
            // });
            var dbo = db.db("mydb");
            dbo.collection("products").find({ type: 'lipstick' }).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
            });
///////////////FIND ONE ? ///////////////
            // var dbo = db.db("mydb");
            // dbo.collection("products").findOne({ type: 'lipstick' }).toArray(function (err, result) {
            //     if (err) throw err;
            //     console.log(result);
            //     db.close();
            // });
        });
    } catch (err) {
        console.log(err)
    }
}

if (argv.u) {
    try {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            // var dbo = db.db("mydb");
            // var myquery = { name: "Masha" };
            // var newvalues = { $set: { address: "Haifa" } };
            // dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
            //     if (err) throw err;
            //     console.log("1 document updated");
            //     db.close();
            // });

            var dbo = db.db("mydb");
            var myquery = { name: "lipstick2" };
            var newvalues = { $set: { color: "light pink" } };
            dbo.collection("products").updateOne(myquery, newvalues, function (err, res) {
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
            // var dbo = db.db("mydb");
            // var myquery = { address: 'Haifa' };
            // dbo.collection("customers").deleteOne(myquery, function(err, obj) {
            //   if (err) throw err;
            //   console.log("1 document deleted");
            //   db.close();
            // });
            var dbo = db.db("mydb");
            var myquery = { color: "violet" };
            dbo.collection("products").deleteOne(myquery, function(err, obj) {
              if (err) throw err;
              console.log("1 document deleted");
              db.close();
            });
            var dbo = db.db("mydb");
            var myquery = { color: "dark" };
            dbo.collection("products").deleteOne(myquery, function(err, obj) {
              if (err) throw err;
              console.log("1 document deleted");
              db.close();
            });
            var dbo = db.db("mydb");
            var myquery = { color: "ruby red" };
            dbo.collection("products").deleteOne(myquery, function(err, obj) {
              if (err) throw err;
              console.log("1 document deleted");
              db.close();
            });
          });
    } catch(err){
        console.log(err)
    }
}
