let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
const app = express();
const uuid = require('uuid/v1');
const PORT = process.env.PORT || 8080;

let stitchPattern = [
    {
        id: uuid(),
        name: "broken rib with twist",
        multiples: "(multiple of 4 sts)",
        special: "RT (right twist) K2tog but do not drop from LH needle, knit first st again and d" +
            "rop both sts from LH needle.",
        pattern: {
            row1: "Row 1 (RS) *K2, p2; rep from * to end.",
            row2: "Rows 2–8 K the knit sts and p the purl sts.",
            row3: "Row 9 *RT, p2; rep from * to end.",
            row4: "Rows 10–18 K the knit sts and p the purl sts.",
            row5: "Row 19 *P2, k2; rep from * to end.",
            row6: "Rows 20–26  K the knit sts and p the purl sts.",
            row7: "Row 27 *P2, RT; rep from * to end.",
            row8: "Rows 28–36 K the knit sts and p the purl sts.",
            row9: "Rep rows 1–36.",
            row10: "",
            row11: "",
            row12: "",
            row13: "",
            row14: "",
            row15: ""
        }

    }
];

//allow express to handlejson as objects in req.bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/stitches", (req, res) => {
    res
        .status(200)
        .send({"message": "Success! here is your data", data: stitchPattern})
});

app.get("/stitches:id", (req, res) => {
    // loop through the data array to find the object which has an ._id that matches
    // req.params.id and return that object
    for (let i = 0; i < stitchPattern; i++) {
        if (id === req.params.id) {
            res.send(stitchPattern[i])
        }
    }
    return res
        .status(404)
        .send({"message": "ERROR NOT FOUND"})
});

app.delete("/stitches:id", (req, res) => {
    // loop through the data array to find the object which has an ._id that matches
    // req.params.id and return that object
    for (let i = 0; i < stitchPattern; i++) {
        if (stitchPattern[i].id === req.params.id) {
            stitchPattern.splice(i, 1);
            res.send({"message": "DELETE SUCCESSFUL"})
        }
    }
    return res
        .status(404)
        .send({"message": "ERROR NOT FOUND"})
});

app.put("/stitches:id", (req, res) => {
    for (let i = 0; i < stitchPattern; i++) {
        if (stitchPattern[i].id === req.params.id) {
            for (let key in req.body) {
                if (stitchPattern[i].hasOwnProperty(key)) {
                    stitchPattern[i][key] = req.body[key];
                }
            };
        }
        return res
            .status(200)
            .send({message: "item updated"})
    }
    return res
        .status(404)
        .send({message: "ERROR NOT FOUND"})
});

app.post("/stitches:id", (req, res)=>{
    let newStitch = req.body;
    newStitch.id = uuid();
    stitchPattern.push(newStitch);
    res.status(201).send({"message":"Success! data was posted"})

});

app.listen(PORT, ()=>{
    console.log(`Starting server port ${PORT}`)
});