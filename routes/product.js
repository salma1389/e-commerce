const express = require("express");
const cloudinary = require ('../utiles/cloudinary');
const product = require("../model/product");
const upload = require ('../utiles/multer');

const router = express.Router();


const {getProducts,getProductById, createproduct, updateProduct, deleteProduct} = require("../controllers/product.Controllers");

router.post("/api/createproducts", upload.single("image"),createproduct)
router.get("/api/products", getProducts);
router.get("/api/product/:_id", getProductById);
router.put("/api/product/:_id",upload.single("image"), updateProduct );
router.delete("/api/product/:_id", deleteProduct );

module.exports = router;

