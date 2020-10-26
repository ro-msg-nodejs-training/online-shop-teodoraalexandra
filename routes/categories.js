// eslint-disable-next-line no-undef
const express = require("express");

// create new router
const router = express.Router();

// eslint-disable-next-line no-undef
const categories_controller = require("../controllers/categoriesController");
router.get("/", categories_controller.category_list);
router.get("/:id", categories_controller.category_detail);
router.post("/", categories_controller.category_create);
router.put("/:id", categories_controller.category_update);
router.delete("/:id", categories_controller.category_delete);

// eslint-disable-next-line no-undef
module.exports = router;
