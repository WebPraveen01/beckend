const mongoose = require('mongoose');
const bodyParser = require('body-parser');




const express = require('express');
const app = express();
const cors = require("cors");
app.use(
  cors()
);
app.use(bodyParser.json());

// Start the server

const port = process.env.PORT || 5000;;

app.get('/', (req, res, next)=>{

    console.log('base req');

    return res.json(200);
})

const url = "mongodb+srv://Praveen989:Birdeye123@cluster0.xwbury3.mongodb.net/dummydb"
try {
  mongoose.connect(url);
  console.log('Database Connected Succesfully');
} catch(error) {
  console.log('Error: ', error.message);
}
const userSchema= require('./models/user.model')
const userrouter = require('./routes/user.routes')
const cartRouter = require('./routes/cart.route')
const cartSchema= require('./models/cart.model')
const prouctSchema = require('./models/product.model')
const productRouter = require('./routes/product.routes')

app.use("/api/users", userrouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.listen(port, () => {

  console.log(`Server listening on port ${port}`);

});