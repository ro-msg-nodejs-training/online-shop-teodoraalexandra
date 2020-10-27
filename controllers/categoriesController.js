// eslint-disable-next-line no-undef,no-unused-vars
const Category = require("../models/categories");

// eslint-disable-next-line no-undef
exports.category_list = function(req, res) {
  Category.find()
    .exec(function (err, list_categories) {
      if (err) { res.sendStatus(404); }
      res.status(200).json(list_categories);
    });
};

// eslint-disable-next-line no-undef
exports.category_detail = function(req, res) {
  // Find an object from database match by 'id'
  Category.find({ "id" : req.params.id }, function (err, category) {
    // If object found return an object else return 404 not-found
    if (err) { res.sendStatus(404); }
    res.status(200).json(category);
  });
};

// eslint-disable-next-line no-undef
exports.category_create = function(req, res) {
  // Create an object of new Item
  let newCategory = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
  };

  // Push new item object to database
  Category.create(newCategory, function (err, newItem) {
    if (err) { res.sendStatus(404); }
    // Return with status 201 - created
    res.status(201).json(newItem);
  });
};

// eslint-disable-next-line no-undef
exports.category_update = function(req, res) {
  let updated = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
  };
  // Get item object match by `id`
  Category.findOneAndUpdate({ "id" : req.params.id }, updated,function (err) {
    // If object found return an object else return 404 not-found
    if (err) { res.sendStatus(404); }

    res.status(201).json(updated);
  });
};

// eslint-disable-next-line no-undef
exports.category_delete = function(req, res) {
  Category.deleteOne({ "id" : req.params.id }, function (err) {
    // If object found return an object else return 404 not-found
    if (err) { res.sendStatus(404); }

    res.sendStatus(204);
  });
};
