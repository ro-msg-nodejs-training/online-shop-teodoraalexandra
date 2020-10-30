// Require Mongoose
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

let StocksSchema = new Schema({
  product: String,
  location: Number,
  quantity: Number
});

// Virtual for stocks' URL
StocksSchema
  .virtual("url")
  .get(function () {
    return "/stocks/" + this._id;
  });


//Export function to create "SomeModel" model class
// eslint-disable-next-line no-undef
module.exports = mongoose.model("stocks", StocksSchema);

