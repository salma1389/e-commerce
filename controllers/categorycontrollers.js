const category = require("../model/category");
const cloudinary = require ('../utiles/cloudinary');
const upload = require ('../utiles/multer');


//  create new category
const createcategory= async (req,res)=>{
  try {
    const result = await cloudinary.uploader.upload (req.file.path);
    const newCategory= new category({
      categName:req.body.categName,
      img:result.secure_url,
      cloudinary_id:result.public_id,
      subcategory:req.body.subcategory})
    await newCategory.save()
    res.status(206).send(newCategory)
  } catch (error) {
    res.status(508).json({msg:error.message})
  }
}

//  get all categorys
const  getCategorys = async (req, res) => {
    try {
      const categorys = await category.find({});
      res.json(categorys);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
  };

  //  get one category

  const getCategoryById = async (req, res) => {
    try {
      const oneCategory = await category.findById(req.params._id);
  
      res.send(oneCategory);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
  };

  //  get category by Id and update it
  const updateCategory = async (req, res) => {
    try {
      const onecategory = await category.findById(req.params._id);
  await cloudinary.uploader.destroy(onecategory.cloudinary_id)
  const result=await cloudinary.uploader.upload(req.file.path);
  const data={
    categName:req.body.categName || onecategory.categName,
    img:result.secure_url || onecategory.img,
    cloudinary_id:result.public_id || onecategory.cloudinary_id,
  };

  const updatedcategory = await category.findByIdAndUpdate(req.params._id, data ,{new:true})
  
      res.send(updatedcategory);
    } catch (error) {
        res.status(506).json({msg:error.message})
    }
  };

  //  delete one category
  const deleteCategory= async (req, res) => {
    try {
      const deletedcategory = await category.findById(req.params._id);
    await cloudinary.uploader.destroy(deletedcategory.cloudinary_id);
    await deletedcategory.remove();
    res.status(200).json({ msg: "category deleted successfully" });
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
  };
  
  module.exports = {
    createcategory,
    getCategorys,
    getCategoryById,
    updateCategory,
    deleteCategory,
  };