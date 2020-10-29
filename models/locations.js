// Require Mongoose
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

let LocationsSchema = new Schema({
  id: Number,
  name: String,
  address: String
});

// Virtual for locations' URL
LocationsSchema
  .virtual("url")
  .get(function () {
    return "/locations/" + this._id;
  });


//Export function to create "SomeModel" model class
// eslint-disable-next-line no-undef
module.exports = mongoose.model("locations", LocationsSchema);

