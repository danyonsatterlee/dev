let express = require("express");
let bodyParser = require("body-parser");
const app = express();
const uuid = require('uuid/v1');
let cors = require("cors");
const PORT = process.env.PORT || 8080;
let bountyArr = [
    {
        id: uuid(),
        name: "Edward Cullen",
        location: "tree house",
        price: "60",
        wanted: "false"

    }, {
        id: uuid(),
        name: "Bella Cullen",
        location: "tree house",
        price: "80",
        wanted: "false"

    }, {
        id: uuid(),
        name: "Michael Jackson",
        location: "wonderland",
        price: "2000",
        wanted: "false"

    }
];

//allow express to handle json as objects in req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res
        .status(200)
        .send({"message": "Success here is your data", data: bountyArr})
});

app.get("/:id", (req, res) => {
    console.log(req.params);
    // loop through the data array to find the object which has an ._id that matches
    // req.params.id and return that object
    for (let i = 0; i < bountyArr.length; i++) {
        if (bountyArr[i].id === req.params.id) {
            res.send(bountyArr[i])
        }
    }
   return res.status(404).send({message: "ERROR NOT FOUND"})

});

app.delete("/:id", (req, res) => {
    // loop through data find the matching objects splice it out of the array send
    // back confirmation message it was deleted
    for (let i = 0; i < bountyArr.length; i++) {
        if (bountyArr[i].id === req.params.id) {
            bountyArr.splice(i, 1);
            res.send({message: "DELETE SUCESSFUL"})

        }
    }
    return res.status(404).send({message: "ERROR NOT FOUND"})
});

app.put("/:id",(req,res)=>{
    //the edit update
    //loop through data
    //find matchign item
    //replacing the old item with new
    //handle error if not FOUND
    for(let i=0; i<bountyArr.length; i++){
        if(bountyArr[i].id === req.params.id){
            for(let key in req.body){
                console.log(key);
                if(bountyArr[i].hasOwnProperty(key)){
                    //check if current item has a property name of key value
                    bountyArr[i][key]=req.body[key];
                }
            };
           return res.status(200).send({message: "item updated"})
        }

    }return res.status(404).send({message: "ERROR NOT FOUND"})
})

app.post("/", (req, res) => {
    let newBounty = req.body;
    newBounty.id = uuid();
    bountyArr.push(newBounty);
    res
        .status(201)
        .send({"message": "Success data was posted"})
});

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
});
