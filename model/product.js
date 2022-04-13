const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  nameproduct: {
    type: String,
    required: true,
    maxLength:[20,"Product name don't exceed 20 characters"]
  },
  description: {
    type: String,
    required: [true,"Please add description to your product"],
    maxLength:[4000,"description can not exceed 4000 characters"]

  },
  price: {
    type: Number,
    required: [true,"Please add a price to your product"],
    maxLength:[8,"price can not exceed 8 characters"]
  },
  countInStock: {
    type: Number,
    required: [true,"Please add some stock to you product"],
    maxLength:[3,"stock can not exceed 3 characters"]

  },
  color: {
    type: Array,
  
  },
  size: {
    type: Array,
  },
  ratings: {
    type: Number,
    default: 0,
    required:[true,"ratings must be from 1 to 5"]
  },
  avatar:{
    type: String,
  },
  cloudinary_id:{
    type:String
  },
  subcategory: {
    type: String,
    required: [true,"Please add a sub category to your product"],
  },
  category: {
    type: String,
    required: [true,"Please add a category to your product which must be women , men , kids"],
  },
});

module.exports = mongoose.model("product", productSchema);
