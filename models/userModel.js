const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    pageColor:{
        type: String,
        required: true,
    },
    pickupLine:{
        type: String,
        required: true,
    }
})

const valentineUser = mongoose.model("valentineUser", userSchema);

module.exports = valentineUser;
