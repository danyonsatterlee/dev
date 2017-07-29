let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
const app = express();

let stitchRouter = require("./routes/stitch.js");
const PORT = process.env.PORT || 8080;



//allow express to handlejson as objects in req.bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//use our routes 
app.use("/stitches",stitchRouter)

app.listen(PORT, () => {
    console.log(`Starting server port ${PORT}`)
});