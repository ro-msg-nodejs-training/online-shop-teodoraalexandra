// Require Mongoose
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

let OrdersSchema = new Schema({
  id: Number,
  shipped: Number,
  createdAt: Date,
  address: String
});

// Virtual for orders' URL
OrdersSchema
  .virtual("url")
  .get(function () {
    return "/orders/" + this._id;
  });


//Export function to create "SomeModel" model class
// eslint-disable-next-line no-undef
module.exports = mongoose.model("orders", OrdersSchema);
