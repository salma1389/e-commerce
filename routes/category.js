const express = require("express");
const cloudinary = require ('../utiles/cloudinary');
const category = require("../model/category");
const upload = require ('../utiles/multer');

const router = express.Router();


const { createcategory, getCategorys, getCategoryById, updateCategory, deleteCategory } = require("../controllers/categorycontrollers");

router.post("/api/createcategory", upload.single("image"),createcategory)
router.get("/api/categorys", getCategorys);
router.get("/api/category/:_id", getCategoryById);
router.put("/api/category/:_id",upload.single("image"), updateCategory);
router.delete("/api/category/:_id", deleteCategory);

module.exports = router;