// eslint-disable-next-line no-undef
const express = require("express");

// create new router
const router = express.Router();

// eslint-disable-next-line no-undef
const orders_controller = require("../controllers/ordersController");
router.get("/", orders_controller.orders_list);
router.get("/:id", orders_controller.order_detail);
router.post("/", orders_controller.order_create);

// eslint-disable-next-line no-undef
module.exports = router;
