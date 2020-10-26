// Require Mongoose
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

let ProductsSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  weight: Number,
  category: Number,
  imageUrl: String
});

// Virtual for categories' URL
ProductsSchema
  .virtual("url")
  .get(function () {
    return "/products/" + this._id;
  });


//Export function to create "SomeModel" model class
// eslint-disable-next-line no-undef
module.exports = mongoose.model("products", ProductsSchema);

