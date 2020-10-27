// eslint-disable-next-line no-undef
exports.upload_image = function(req, res) {
  // If product has no images -> ADD
  // If product already has images -> UPDATE
  res.send("NOT IMPLEMENTED: Upload image for product with id: ", req.params.id);
};

// eslint-disable-next-line no-undef
exports.remove_image = function(req, res) {
  // imageUrl will become null -> DELETE
  res.send("NOT IMPLEMENTED: Remove image for product with id: ", req.params.id);
};

// eslint-disable-next-line no-undef
exports.show_image = function(req, res) {
  // Get the image using Streams
  res.send("NOT IMPLEMENTED: Get image for product with id: ", req.params.id);
};

// eslint-disable-next-line no-undef
exports.all_images = function(req, res) {
  // Get all images
  res.send("NOT IMPLEMENTED: Get all images");
};
