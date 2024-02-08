const express = require("express");
const { addToCart,deleteCart,getCartDetails} = require("../controllers/cart.controller");
  const router = express.Router();

router.route("/addToCart").post(addToCart);
router.route("/deleteCart/:id").delete(deleteCart);
router.route("/getCartDetails/").get(getCartDetails);

module.exports = router;