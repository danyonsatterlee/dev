let express = require("express");
let bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 8080;
let bountyArr = [
    {
        name: "Edward Cullen",
        location: "tree house",
        price: "60",
        dead: "false"

    }, {
        name: "Bella Cullen",
        location: "tree house",
        price: "80",
        dead: "false"

    }, {
        name: "Michael Jackson",
        location: "wonderland",
        price: "2000",
        dead: "false"

    }
];

//allow express to handle json as objects in req.body
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.status(200).send({"message" : "Success here is your data", data : bountyArr})
});

app.post("/", (req,res)=>{
    let newBounty=req.body;
    bountyArr.push(newBounty);
    res.status(201).send({"message": "Success data was posted"})
})
app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
});


