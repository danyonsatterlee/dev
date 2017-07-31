const express = require("express");
const teamRouter = express.Router();
const uuid = require('uuid/v1');

let teams = [
    {
        id: uuid(),
        sport: "Baseball",
        team: "Rockies",
        pitcher: "Some Guy",
        firstBase: "Another Guy"
    },
        {
        id: uuid(),
        sport: "Baseball",
        team: "Blue Jays",
        pitcher: "some other dude",
        firstBase: "dude"
    },
]

teamRouter.get("/", (req, res) => {

  let search = teams.filter((item) => {

        for (let key in req.query) {

            if (req.query[key] != item[key]) {
                return false;

            }

        }
        return true;
    });
    res
        .status(200)
        .send({"message": "Success! here is your data", data: search})
});

teamRouter.get("/:id", (req, res) => {
    // loop through the data array to find the object which has an ._id that matches
    // req.params.id and return that object
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].id === req.params.id) {
            res.send(teams[i])
        }
    }
    return res
        .status(404)
        .send({"message": "ERROR NOT FOUND"})
});

teamRouter.post("/", (req, res) => {
    let newTeam = req.body;
    newTeam.id = uuid();
    teams.push(newTeam);
    res
        .status(201)
        .send({"message": "Success! data was posted"})

});

teamRouter.delete("/:id", (req, res) => {
    // loop through the data array to find the object which has an ._id that matches
    // req.params.id and return that object
    for (let i = 0; i < team.length; i++) {
        if (team[i].id === req.params.id) {
            team.splice(i, 1);
            res.send({"message": "DELETE SUCCESSFUL"})
        }
    }
    return res
        .status(404)
        .send({"message": "ERROR NOT FOUND"})
});


module.exports=teamRouter;