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
exports.product_list_categories = function(req, res) {
  Product.find({ "category" : req.params.cid }, function (err, list_products_categories) {
    // If object found return an object else return 404 not-found
    if (err) { res.sendStatus(404); }
    res.status(200).json(list_products_categories);
  });
};

// eslint-disable-next-line no-undef
exports.product_detail = function(req, res) {
  Product.find({ "id" : req.params.id }, function (err, product) {
    // If object found return an object else return 404 not-found
    if (err) { res.sendStatus(404); }
    res.status(200).json(product);
  });
};

// eslint-disable-next-line no-undef
exports.product_create = function(req, res) {
  // Create an object of new Item
  let newProduct = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    weight: req.body.weight,
    category: parseInt(req.params.cid),
    imageUrl: req.body.imageUrl
  };

  // Push new item object to database
  Product.create(newProduct, function (err, newItem) {
    if (err) { res.sendStatus(404); }
    // Return with status 201 - created
    res.status(201).json(newItem);
  });
};

// eslint-disable-next-line no-undef
exports.product_update = function(req, res) {
  let updated = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    weight: req.body.weight,
    category: req.body.category,
    imageUrl: req.body.imageUrl
  };

  // Get item object match by `id`
  Product.findOneAndUpdate({ "id" : req.params.id }, updated,function (err) {
    // If object found return an object else return 404 not-found
    if (err) { res.sendStatus(404); }

    res.status(201).json(updated);
  });
};

// eslint-disable-next-line no-undef
exports.product_delete = function(req, res) {
  Product.deleteOne({ "id" : req.params.id }, function (err) {
    // If object found return an object else return 404 not-found
    if (err) { res.sendStatus(404); }

    res.sendStatus(204);
  });
};
