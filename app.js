//Set up mongoose connection
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost:27017/nodetutorial";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// eslint-disable-next-line no-undef
const http = require("http");
// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const cors = require("cors");
// eslint-disable-next-line no-undef
const categoriesRouter = require("./routes/categories");
// eslint-disable-next-line no-undef
const productsRouter = require("./routes/products");
// eslint-disable-next-line no-undef
const imagesRouter = require("./routes/images");
// eslint-disable-next-line no-undef
const ordersRouter = require("./routes/orders");
// eslint-disable-next-line no-undef
const busboy = require("connect-busboy");

const app = express();
app.use(express.json());
app.use(cors({origin: "http://localhost:8100"}));
app.use(busboy());
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/images", imagesRouter);
app.use("/orders", ordersRouter);

// default URL to API
app.use("/", function(req, res) {
  res.send("Server works :)");
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug("Server listening on port " + port);
