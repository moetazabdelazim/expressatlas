const mongoose = require("mongoose"),
    bookschema = mongoose.Schema({
        name: String,
        link: String,
        hid: String
    });
module.exports = mongoose.model("books", bookschema)