const express = require("express");
const {
  addProduct, getAllProducts,getProductById,updateProduct,deleteProduct
  } = require("../controllers/product.controller");
  const router = express.Router();

router.route("/addProduct").post(addProduct);
router.route("/getProductById/:id").get(getProductById);
router.route("/updateProduct/:id").post(updateProduct);
router.route("/getAllProducts").get(getAllProducts);
router.route("/deleteProduct/:id").delete(deleteProduct);

module.exports = router;