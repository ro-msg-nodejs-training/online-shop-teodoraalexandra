// eslint-disable-next-line no-undef,no-unused-vars
const Product = require("../models/products");

// eslint-disable-next-line no-undef
exports.product_list = function(req, res) {
  Product.find()
    .exec(function (err, list_products) {
      if (err) { return console.log(err); }
      res.status(200).json(list_products);
    });
};

// eslint-disable-next-line no-undef
exports.product_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: Product detail: " + req.params.id);
};

// eslint-disable-next-line no-undef
exports.product_create = function(req, res) {
  res.send("NOT IMPLEMENTED: Product create");
};

// eslint-disable-next-line no-undef
exports.product_update = function(req, res) {
  res.send("NOT IMPLEMENTED: Product update");
};

// eslint-disable-next-line no-undef
exports.product_delete = function(req, res) {
  res.send("NOT IMPLEMENTED: Product delete");
};
