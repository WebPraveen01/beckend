const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        required:true,
    },
    name: {
       type: String,
       required:true, 
    },
    catagory: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
    },
    new_price:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    size:{
        type:String,
    },
    color:{
        type:String,
    }
    
    
})

module.exports = mongoose.model("Cart", cartSchema);