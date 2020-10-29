// Require Mongoose
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

let OrderDetailsSchema = new Schema({
  order: Number,
  product: Number,
  quantity: Number
});

// Virtual for orderDetails' URL
OrderDetailsSchema
  .virtual("url")
  .get(function () {
    return "/orderdetails/" + this._id;
  });


//Export function to create "SomeModel" model class
// eslint-disable-next-line no-undef
module.exports = mongoose.model("order_details", OrderDetailsSchema);
