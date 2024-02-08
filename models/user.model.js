const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    id: {
        type: Number,
    },
    email: {
       type: String, 
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Super Admin', 'Broker', 'Supplier','Seller'],

    }
})

module.exports = mongoose.model("Users", userSchema);