// eslint-disable-next-line no-undef
const express = require("express");

// create new router
const router = express.Router();

// eslint-disable-next-line no-undef
const images_controller = require("../controllers/imagesController");
router.post("/upload/product/:id", images_controller.upload_image);
router.get("/remove/product/:id", images_controller.remove_image);
router.get("/show/product/:id", images_controller.show_image);
//router.get("/", images_controller.all_images);

// eslint-disable-next-line no-undef
module.exports = router;
