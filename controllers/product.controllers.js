const product = require("../model/product");
const cloudinary = require ('../utiles/cloudinary');
const upload = require ('../utiles/multer');


//  create new products
const createproduct= async (req,res)=>{
  // const {nameproduct,description,price,countInStock,color,size,ratings,image,category}=req.body
  try {
    const result = await cloudinary.uploader.upload (req.file.path);
// res.send(result)
    const newProduct= new product({
      nameproduct:req.body.nameproduct,
      description:req.body.description,
      price:req.body.price,
      countInStock:req.body.countInStock,
      color:req.body.color,
      size:req.body.size,
      ratings:req.body.ratings,
      avatar:result.secure_url,
      cloudinary_id:result.public_id,
      category:req.body.category})
    await newProduct.save()
    res.status(206).send(newProduct)
  } catch (error) {
    res.status(508).json({msg:error.message})
  }
}

//  get all products
const  getProducts = async (req, res) => {
    try {
      const products = await product.find({});
      res.json(products);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
  };

  //  get one product

  const getProductById = async (req, res) => {
    try {
      const oneProduct = await product.findById(req.params._id);
  
      res.send(oneProduct);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
  };

  //  get product by Id and update it
  const updateProduct = async (req, res) => {
    try {
      const oneproduct = await product.findById(req.params._id);
  await cloudinary.uploader.destroy(oneproduct.cloudinary_id)
  const result=await cloudinary.uploader.upload(req.file.path);
  const data={
    nameproduct:req.body.nameproduct || oneproduct.nameproduct,
    ratings:req.body.ratings || oneproduct.ratings,
    avatar:result.secure_url || oneproduct.avatar,
    cloudinary_id:result.public_id || oneproduct.cloudinary_id,
  };

  const updatedproduct = await product.findByIdAndUpdate(req.params._id, data ,{new:true})
  
      res.send(updatedproduct);
    } catch (error) {
        res.status(506).json({msg:error.message})
    }
  };

  //  delete one product
  const deleteProduct = async (req, res) => {
    try {
      const deletedproduct = await product.findById(req.params._id);
    await cloudinary.uploader.destroy(deletedproduct.cloudinary_id);
    await deletedproduct.remove();
    res.status(200).json({ msg: "product deleted successfully" });
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
  };
  
  module.exports = {
    createproduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
  };