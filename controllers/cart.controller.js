const CartModel = require('../models/cart.model');


exports.addToCart = async (req, res) => {
    console.log(req.body);
    const { id, name, catagory, new_price, old_price,quantity,size,color } = req.body
    if (!id || !name || !catagory) {
        res.status(400).json({ error: "fill the details" });
    } else {
        try {
            const preorder = await CartModel.findOne({ name });
            if (preorder) {
                res.status(422).json({ error: "This Product is alredy exis" });
            } else {
                const finalCart = new CartModel({
                    id: id,
                    name: name,
                    catagory: catagory,
                    new_price: new_price,
                    old_price: old_price,
                    quantity:quantity,
                    size:size,
                    color:color,
                });
                const storedata = await finalCart.save();
                res.status(201).json(storedata);
            }
        } catch (error) {
            res.status(500).json(({ error: error.message }))
        }
    }
}

exports.deleteCart = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await CartModel.deleteOne({ id: id });
      res.status(201).json({ message: "product deleted successfully" });
    } catch (error) {
      console.log(error.message);
    }
  }

  exports.getCartDetails = async(req,res) =>{
    console.log(req.body);

    try{
        const cartDetails = await CartModel.find()
        if(cartDetails){
            res.status(201).json(cartDetails);
        }else{
            res.status(400).json({error:"cart is empty"});
        }
    }catch(error){
        console.log(error.message);
    }
}
