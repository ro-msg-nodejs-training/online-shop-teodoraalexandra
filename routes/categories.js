// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const getCategories = require("../data/memory/categories");

// create new router
const router = express.Router();

// eslint-disable-next-line no-unused-vars
const categoriesRoutes = getCategories().then(function(data) {
  // READ
  router.get("/", function (req, res) {
    res.status(200).json(data);
  });

  // READ ID
  router.get("/:id", function (req, res) {
    // Find an object from 'data' array match by 'id'
    let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
    // If object found return an object else return 404 not-found
    if (found) {
      res.status(200).json(found);
    } else {
      res.sendStatus(404);
    }
  });

  // ADD
  router.post("/", function (req, res) {
    // Create an object of new Item
    let newItem = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
    };

    // Push new item object to data array of items
    data.push(newItem);

    // Return with status 201 - created
    res.status(201).json(newItem);
  });

  // UPDATE
  router.put("/:id", function (req, res) {
    // Get item object match by `id`
    let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
    });

    // Check if item found
    if (found) {
      let updated = {
        id: found.id,
        name: req.body.name,
        description: req.body.description,
      };

      // Find index of found object from array of data
      let targetIndex = data.indexOf(found);

      // Replace object from data list with `updated` object
      data.splice(targetIndex, 1, updated);

      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  });

  // DELETE
  router.delete("/:id", function (req, res) {
    // Find item from array of data
    let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
    });

    if (found) {
      let targetIndex = data.indexOf(found);

      // Splice means delete item from 'data' array using index
      data.splice(targetIndex, 1);
    }

    res.sendStatus(204);
  });
});

// eslint-disable-next-line no-undef
module.exports = router;
