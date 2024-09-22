const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const CommentSchema = Schema(
  {
    comentarioPedido: {
      type: String,
      trim: true,
    },
    pedido: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Comment", CommentSchema);