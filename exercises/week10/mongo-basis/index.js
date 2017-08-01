let mongodb = require("mongodb");

let MongoClient = mongodb.MongoClient;
//597fb17afc55c22c0fe4a338
let url = "mongodb://localhost:27017/catbabies";
//takes the url, and a callback function
MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log("Error in running mongodb", err);
    } else {
        console.log("Success");
        //connect to the catbaby collection
        let catbabies = db.collection("catbabies");
        // find all catbabies
        catbabies
            .find({})
            .toArray((err, data) => {
                if (err) {
                    console.log(err)
                }
                console.log(data);
                db.close();
            });
        // insert a catbaby catbabies.insertOne({     name:"Jacob",     color:"brown",
        //   age: "82" },(err, result)=>{     if(err){         console.log(err)     }
        // else{         console.log(result)     } }) catbabies.deleteOne({_id:new
        // mongodb.ObjectID("597fb17afc55c22c0fe4a338")},(err, result)=>{     if(err){
        //       console.log(err)     }else{         console.log(result);     } });
        // update a catbaby
        // catbabies.updateOne({
        //     _id: new mongodb.ObjectID("597fb13438bd052be841f901")
        // }, {
        //     $set: {
        //         color: "black"
        //     }
        // }, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Success item was updated")
        //     }
        // });
    }

});