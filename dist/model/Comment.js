"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema,
  model = mongoose.model;
var CommentSchema = Schema({
  comentarioPedido: {
    type: String,
    trim: true
  },
  pedido: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = model("Comment", CommentSchema);