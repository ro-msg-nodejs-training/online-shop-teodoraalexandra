// eslint-disable-next-line no-undef,no-unused-vars
const Orders = require("../models/orders");

// eslint-disable-next-line no-undef
exports.orders_list = function(req, res) {
  Orders.find()
    .exec(function (err, list_orders) {
      if (err) { res.sendStatus(404); }
      res.status(200).json(list_orders);
    });
};

// eslint-disable-next-line no-undef
exports.order_detail = function(req, res) {
  // Find an object from database match by 'id'
  Orders.find({ "id" : req.params.id }, function (err, order) {
    // If object found return an object else return 404 not-found
    if (err) { res.sendStatus(404); }
    res.status(200).json(order);
  });
};

// eslint-disable-next-line no-undef
exports.order_create = function(req, res) {
  // Create an object of new Item
  let newOrder = {
    id: 0,
    shipped: "",
    createdAt: "",
    address: "",
  };

  // Push new item object to database
  Orders.create(newOrder, function (err, newItem) {
    if (err) { res.sendStatus(404); }
    // Return with status 201 - created
    res.status(201).json(newItem);
  });
};
