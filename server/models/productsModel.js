const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Products = mongoose.model("product", productsSchema);

module.exports = Products;

// const User = require('../models/userModel')

// exports.signup = async (req, res ,next) => {
//     const newUser = await User.create({
//         req.body.email,
//         req.body.email,
//         req.body.email,
//         req.body.email
//     })
// }
