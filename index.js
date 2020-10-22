// eslint-disable-next-line no-undef
const http = require("http");
// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const cors = require("cors");
// eslint-disable-next-line no-undef
const categoriesRouter = require("./routes/categories");

const app = express();
app.use(express.json());
app.use(cors({origin: "http://localhost:8100"}));
app.use("/categories", categoriesRouter);

// default URL to API
app.use("/", function(req, res) {
  res.send("Server works :)");
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug("Server listening on port " + port);
