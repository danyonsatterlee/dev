let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let bountySchema = new Schema({
    name: {
        type: String,
        required: true

    },
    location: String,
    wanted: Boolean,
    price:{
        type: Number,
        required: true
    } 
});

module.exports = mongoose.model("bountylist", bountySchema);