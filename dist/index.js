"use strict";

var app = require("./app.js");
require("./utils/mongoose.js");
var port = process.env.PORT || 3000; // Usa el puerto definido por la variable de entorno PORT, o 3000 si no está definido

app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});