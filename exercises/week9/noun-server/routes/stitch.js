let express = require("express");
const uuid = require('uuid/v1');
//make a mini express stitchRouter called a router
let stitchRouter = express.Router();
let stitchPattern = [
  {
    id: uuid(),
    name: "broken rib with twist",

    category: "knit and purl",
    notes: "RT (right twist) K2tog but do not drop from LH needle, knit first st again and d" + "rop both sts from LH needle.",

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
      row15: "",
      row16: ""
    }
  }, {
    id: uuid(),
    name: "broken rib with twist",
    multiples: "(multiple of 4 sts)",
    category: "cable",
    special: "RT (right twist) K2tog but do not drop from LH needle, knit first st again and d" + "rop both sts from LH needle.",

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
      row15: "",
      row16: ""
    }
  }
];
stitchRouter.get("/", (req, res) => {
  let search = stitchPattern.filter((item) => {

    for (let key in req.query) {
      if (req.query[key] != item[key]) {
        return false;

      }

    }
    return true;
  });
  res.status(200).send({"message": "Success! here is your data", data: search})
});

stitchRouter.get("/:id", (req, res) => {
  // loop through the data array to find the object which has an ._id that matches
  // req.params.id and return that object
  for (let i = 0; i < stitchPattern.length; i++) {
    if (stitchPattern[i].id === req.params.id) {
      res.send(stitchPattern[i])
    }
  }
  return res.status(404).send({"message": "ERROR NOT FOUND"})
});

stitchRouter.delete("/:id", (req, res) => {
  // loop through the data array to find the object which has an ._id that matches
  // req.params.id and return that object
  for (let i = 0; i < stitchPattern.length; i++) {
    if (stitchPattern[i].id === req.params.id) {
      stitchPattern.splice(i, 1);
      res.send({"message": "DELETE SUCCESSFUL"})
    }
  }
  return res.status(404).send({"message": "ERROR NOT FOUND"})
});

stitchRouter.put("/:id", (req, res) => {
  for (let i = 0; i < stitchPattern.length; i++) {
    if (stitchPattern[i].id === req.params.id) {
      for (let key in req.body) {
        if (stitchPattern[i].hasOwnProperty(key)) {
          if (key === "pattern") {
            for (let pattern_key in req.body.pattern) {
              stitchPattern[i].pattern[pattern_key ] = req.body.pattern[pattern_key ]
            }
          } else {
            stitchPattern[i][key] = req.body[key];
          }

        }
      };
      return res.status(200).send({message: "item updated"})
    }

  }
  return res.status(404).send({message: "ERROR NOT FOUND"})
});

stitchRouter.post("/", (req, res) => {
  let newStitch = req.body;
  newStitch.id = uuid();
  stitchPattern.push(newStitch);
  res.status(201).send({"message": "Success! data was posted"})

});

module.exports = stitchRouter;