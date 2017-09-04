let express = require('express');
let hotelRouter = express.Router();
let expressJwt = require("express-jwt");
let settings = require("../config/settings.js");
let authorization = expressJwt({secret: settings.secret})

hotelRouter.get("/events", (req, res) => {
    res
        .status(200)
        .send({
            "message": "Here are the events at the hotel",
            data: [
                {
                   
                    description: "Tech Conference World"
                }, {
                    checkIn: "6:00 PM",
                    checkOut: "7:00 PM",
                    title: "Conference",
                    description: "Closing Ceremony"
                }
            ]
        })
});

hotelRouter.get("/guests", authorization, (req, res) => {
    res
        .status(200)
        .send({
            "message": "HEre are the guests at the hotel",
            data: [
                {
                    firstName: "Caleb",
                    lastName: "Black",
                    roomNumber: 4

                },
                    {
                    firstName: "Sarah",
                    lastName: "Baldwin",
                    roomNumber: "Pent house"

                }
            ]
        })
});

module.exports = hotelRouter;