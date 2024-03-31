"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_URI = exports.MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://joboxappec:IVAgz0x72PYCq9tY@cluster0.yenknyq.mongodb.net/";