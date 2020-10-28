// eslint-disable-next-line no-undef
const fs = require("fs");
// eslint-disable-next-line no-undef,no-unused-vars
const Product = require("../models/products");

// eslint-disable-next-line no-undef
exports.upload_image = function(req, res) {
  let fstream;
  req.pipe(req.busboy);

  req.busboy.on("file", function (fieldname, file, filename) {
    let serverResponse = {
      imageUrl: filename,
      productId: req.params.id
    };

    // Add image to /tmp
    fstream = fs.createWriteStream("C:\\Users\\dant\\Desktop\\online-shop-teodoraalexandra\\tmp\\" + filename);
    file.pipe(fstream);

    const filter = { "id" : req.params.id };
    const update = { imageUrl : filename };

    fstream.on("close", async function () {
      // Add fileName to imageUrl of found product
      await Product.updateOne(filter, update);
      await res.status(201).json(serverResponse);
    });
  });
};

// eslint-disable-next-line no-undef
exports.remove_image = async function(req, res) {
  // Removing the file from tmp
  const filter = { "id" : req.params.id };
  const update = { imageUrl : "" };

  let filename;
  await Product.findOne(filter, function (err, product) {
    // If object found return an object else return 404 not-found
    if (err) { res.sendStatus(404); }
    filename = product.imageUrl;
  });

  await fs.unlinkSync("C:\\Users\\dant\\Desktop\\online-shop-teodoraalexandra\\tmp\\" + filename);

  // Remove file from product imageUrl
  await Product.updateOne(filter, update);
  await res.sendStatus(204);
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
