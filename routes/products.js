// eslint-disable-next-line no-undef
const express = require("express");

// create new router
const router = express.Router();

// eslint-disable-next-line no-undef
const products_controller = require("../controllers/productsController");
router.get("/", products_controller.product_list);
router.get("/:id", products_controller.product_detail);
router.post("/", products_controller.product_create);
router.put("/:id", products_controller.product_update);
router.delete("/:id", products_controller.product_delete);

// eslint-disable-next-line no-undef
module.exports = router;
