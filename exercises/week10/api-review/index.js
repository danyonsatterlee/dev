const express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let teamsRouter = require("./routes/teams.js");
const app = express();
const port = process.env.PORT || 8080;

//allow express to handlejson as objects in req.bodyparser
//extended false means so you can't import images or pdf's
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//use our routes 
app.use("/teams",teamsRouter)

app.listen(port, ()=>{
    console.log(`listening to ${port}`)
});

