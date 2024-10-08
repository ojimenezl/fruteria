"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema,
  model = mongoose.model;
var TaskSchema = Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    trim: true
  },
  comentarioPedido: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  },
  pedido: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = model("Task", TaskSchema);