const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    code: String,
    name: String,
    price: Number,
    categories: Array
});

module.exports = mongoose.model("Product", productSchema);