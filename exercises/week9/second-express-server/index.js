let express = require("express");
let bodyParser = require("body-parser");
const app = express();
let mongoose = require("mongoose");
let cors = require("cors");
const PORT = process.env.PORT || 8080;

//import routes
let bountyRouter= require("./routes/bounty.js");


//allow express to handle json as objects in req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
//use bounty router
app.use("/bounty", bountyRouter);


app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
});

mongoose.connect("mongodb://localhost:27017/bounty");

//should be in both my modules and index







// const app = express();
// const port = process.env.PORT || 8080;