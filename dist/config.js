"use strict";

var _require = require("dotenv"),
  config = _require.config;
config();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://joboxappec:IVAgz0x72PYCq9tY@cluster0.yenknyq.mongodb.net/";
module.exports = {
  MONGODB_URI: MONGODB_URI
};