let express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;
//request is req
//res response
app.get("/", (req, res)=>{
    res.status(200).send({"message": "success you made your first express server"})

});
app.listen(PORT,()=>{
    console.log(`starting server on poart ${PORT}`);
});



