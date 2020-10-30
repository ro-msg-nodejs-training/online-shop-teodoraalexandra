// eslint-disable-next-line no-undef
const Orders = require("../models/orders");
// eslint-disable-next-line no-undef
const OrderDetails = require("../models/orderDetails");
// eslint-disable-next-line no-undef
const Stocks = require("../models/stocks");

// eslint-disable-next-line no-undef
exports.orders_list = function(req, res) {
  Orders.find()
    .exec(function (err, list_orders) {
      if (err) { res.sendStatus(404); }
      res.status(200).json(list_orders);
    });
};

// eslint-disable-next-line no-undef
exports.order_create = async function(req, res) {
  // ORDER === CREATE
  // id -> next()
  // shipped -> LOCATION STRATEGY
  // createdAt -> today
  // address -> given in body

  // STOCK === UPDATE
  // quantity -> quantity --

  let indexes = [];
  Orders.find()
    .exec(function (err, list_orders) {
      if (err) { console.log(err); }
      list_orders.forEach(function (item) {
        indexes.push(item.id);
      });

      let today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;
      const orderId = indexes[indexes.length - 1] + 1;

      const products = req.body.products;
      products.forEach(function (item) {
        // Largest stock strategy

        Stocks.findOne({ "product" : item.name })
          .sort({"quantity": -1})
          .exec(function (err, stock) {
            if (err) { console.log(err); }

            let newOrderDetails = {
              order: orderId,
              product: item.name,
              quantity: item.quantity,
              location: stock.location,
            };

            // ORDER_DETAIL
            // order -> id of the order
            // product -> product name, given in body
            // quantity -> quantity, given in body
            OrderDetails.create(newOrderDetails, function (err) {
              if (err) { console.log(err); }
            });
          });

        // TODO: Closest location
      });

      // Create an object of new Item
      let newOrder = {
        id: orderId,
        shipped: "",
        createdAt: today,
        address: req.body.address,
      };
      res.status(201).json(newOrder);

      /*Orders.create(newOrder, function (err, newItem) {
        if (err) { res.sendStatus(404); }
        // Return with status 201 - created
        res.status(201).json(newItem);
      });*/
    });
};
