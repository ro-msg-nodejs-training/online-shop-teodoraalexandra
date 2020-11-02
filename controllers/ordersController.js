// eslint-disable-next-line no-undef
const Orders = require("../models/orders");
// eslint-disable-next-line no-undef
const OrderDetails = require("../models/orderDetails");
// eslint-disable-next-line no-undef
const Stocks = require("../models/stocks");
// eslint-disable-next-line no-undef
const Locations = require("../models/locations");
// eslint-disable-next-line no-undef
const axios = require("axios");

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

            // STOCK === UPDATE
            // quantity -> quantity --
            let updated = {
              product: item.name,
              location: stock.location,
              quantity: stock.quantity - item.quantity,
            };

            // Get item object match by `product`
            Stocks.findOneAndUpdate({ "product" : item.name }, updated,function (err) {
              // If object found return an object else return 404 not-found
              if (err) { console.log(err); }
            });
          });

        const deliveryAddress = req.body.address;

        // Closest location
        Stocks.findOne({ "product" : item.name })
          .exec(function (err, stock) {
            if (err) { console.log(err); }

            Locations.findOne({ "id" : stock.location})
              .exec(function (err, location) {
                if (err) { console.log(err); }
                let locationAddress = null;
                if (location.address !== null) {
                  locationAddress = location.address;
                }

                const headers = {
                  "Authorization": "JbMAbSQGDnPgbGx0xUzxd75XOWPGNfNM"
                };

                const data = {
                  "locations": [
                    locationAddress,
                    deliveryAddress
                  ],
                  "options": {
                    "allToAll": true
                  }
                };

                axios.post("http://www.mapquestapi.com/directions/v2/routematrix", data, {
                  headers: headers
                })
                  .then((response) => {
                    console.log(response);
                  })
                  .catch((error) => {
                    console.log(error);
                  });

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

                // STOCK === UPDATE
                // quantity -> quantity --
                let updated = {
                  product: item.name,
                  location: item.location,
                  quantity: stock.quantity - item.quantity,
                };

                // Get item object match by `product`
                Stocks.findOneAndUpdate({ "product" : item.name }, updated,function (err) {
                  // If object found return an object else return 404 not-found
                  if (err) { console.log(err); }
                });
              });
          });
      });

      // Create an object of new Item
      let newOrder = {
        id: orderId,
        shipped: "",
        createdAt: today,
        address: req.body.address,
      };

      Orders.create(newOrder, function (err, newItem) {
        if (err) { res.sendStatus(404); }
        // Return with status 201 - created
        res.status(201).json(newItem);
      });
    });
};
