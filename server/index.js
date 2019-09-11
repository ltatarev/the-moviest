var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var socketIO = require("socket.io");
const morgan = require("morgan");

const config = require("./config/config");

var server_port = process.env.PORT || config.port;
var server_host = process.env.HOST || "0.0.0.0";

require("./utils/db");

require("./models");

var app = express();

app.use(morgan("tiny"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/dist/")));

const routes = require("./routes");
app.use("/api/", routes);

app.use("**", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const server = app.listen(server_port, server_host, function() {
  console.log("Listening on port %d", server_port);
});

const io = socketIO(server);

io.on("connection", socket => {
  socket.on("getAvatarURL", socket => {
    socket.emit("getAvatarURL", id => {
      console.log(id);
    });
  });
});
