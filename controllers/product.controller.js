const ProductModel = require('../models/product.model');

exports.addProduct = async (req, res) => {
    console.log(req.body);
    const { id, name, catagory, new_price, old_price } = req.body
    if (!id || !name || !catagory) {
        res.status(400).json({ error: "fill the details" });
    } else {
        try {
            const preorder = await ProductModel.findOne({ name });
            if (preorder) {
                res.status(422).json({ error: "This Product is alredy exis" });
            } else {
                const finalorder = new ProductModel({
                    id: id,
                    name: name,
                    catagory: catagory,
                    new_price: new_price,
                    old_price: old_price,
                });
                const storedata = await finalorder.save();
                res.status(201).json(storedata);
            }
        } catch (error) {
            res.status(500).json(({ error: error.message }))
        }
    }
}

exports.getProductById = async (req, res) => {
    console.log("hi");
    const { id } = req.params;
    console.log(id);
    try {
        const productById = await ProductModel.find({
            id

        });
        if (productById) {
            res.status(201).json(productById);
        } else {
            res.status(201).json({ error: "product not exist" });
        }
    } catch (error) {
        console.log(erro.message);
    }
}


exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, catagory, new_price, old_price } = req.body;
    try {
        const updateProduct = await ProductModel.findOne({
            id: id,
        });
        if (updateProduct) {
            const result = await ProductModel.findOneAndUpdate(
                { id: id },
                {
                    name: name,
                    catagory: catagory,
                    new_price: new_price,
                    old_price: old_price
                },
                { new: true }
            );
            res.status(201).json(result);
            console.log(result);
        } else {
            res.status(400).json({ error: "product does not exits" })
        }
    } catch (error) {
        console.log(error.message);
    }
}

exports.getAllProducts = async(req,res) =>{
    console.log(req.body);

    try{
        const ProductDetails = await ProductModel.find()
        if(ProductDetails){
            res.status(201).json(ProductDetails);
        }else{
            res.status(400).json({error:"product not exits"});
        }
    }catch(error){
        console.log(error.message);
    }
}
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await ProductModel.deleteOne({ id: id });
      res.status(201).json({ message: "product deleted successfully" });
    } catch (error) {
      console.log(error.message);
    }
  };