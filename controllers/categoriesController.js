// eslint-disable-next-line no-undef,no-unused-vars
const Category = require("../models/categories");

// eslint-disable-next-line no-undef
exports.category_list = function(req, res) {
  Category.find()
    .exec(function (err, list_categories) {
      if (err) { return console.log(err); }
      res.status(200).json(list_categories);
    });
};

// eslint-disable-next-line no-undef
exports.category_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: Category detail: " + req.params.id);
};

// eslint-disable-next-line no-undef
exports.category_create = function(req, res) {
  res.send("NOT IMPLEMENTED: Category create");
};

// eslint-disable-next-line no-undef
exports.category_update = function(req, res) {
  res.send("NOT IMPLEMENTED: Category update");
};

// eslint-disable-next-line no-undef
exports.category_delete = function(req, res) {
  res.send("NOT IMPLEMENTED: Category delete");
};
