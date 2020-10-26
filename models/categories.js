// Require Mongoose
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

let CategoriesSchema = new Schema({
  id: Number,
  name: String,
  description: String
});

// Virtual for categories' URL
CategoriesSchema
  .virtual("url")
  .get(function () {
    return "/categories/" + this._id;
  });

//Export function to create "SomeModel" model class
// eslint-disable-next-line no-undef
module.exports = mongoose.model("categories", CategoriesSchema);
