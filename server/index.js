const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const config = require("./config");

const server_port = process.env.PORT || config.requireEnv("PORT", 3000);
const server_host = process.env.HOST || "0.0.0.0";

require("./utils/db");

require("./models");

const app = express();

app.use(morgan("tiny"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/dist/")));

const routes = require("./router");
app.use("/api/", routes);

app.use("**", function(req, res) {
  res.sendFile(path.join(__dirname, config.root));
});

app.listen(server_port, server_host, function() {
  console.log("Listening on port %d", server_port);
});
