const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { create } = require("express-handlebars");
const indexRoutes = require("./routes/tasks.routes.js");
const Handlebars = require('handlebars');

const app = express();

// Registrar el helper eq
Handlebars.registerHelper('eq', function(a, b) {
  return a === b;
});

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use(indexRoutes);

// public route
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404");
});

module.exports = app;
