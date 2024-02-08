const mongoose = require('mongoose');

const prouctSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        required:true,
    },
    name: {
       type: String, 
       required:true,
    },
    catagory:{
        type:String,
        required:true,
    },
    image: {
        type: String, 

    },
    new_price:{
        type:String,
    },
    old_price:{
        type:String,
    }

})

module.exports = mongoose.model("Product", prouctSchema);