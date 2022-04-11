const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  nameproduct: {
    type: String,
    required: false,
    maxLength:[20,"Product name don't exceed 20 characters"]
  },
  description: {
    type: String,
    required: [false,"Please add description to your product"],
    maxLength:[4000,"description can not exceed 4000 characters"]

  },
  price: {
    type: Number,
    required: [false,"Please add a price to your product"],
    maxLength:[8,"price can not exceed 8 characters"]
  },
  countInStock: {
    type: Number,
    required: [false,"Please add some stock to you product"],
    maxLength:[3,"stock can not exceed 3 characters"]

  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  ratings: {
    type: Number,
    default: 0,
    required:true
  },
  avatar:{
    type: String,
    required:true
  },
  cloudinary_id:{
    type:String
  },
  category: {
    type: String,
    required: [false,"Please add a category to your product"],
  },
});

module.exports = mongoose.model("product", productSchema);
