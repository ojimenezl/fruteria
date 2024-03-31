const { config } = require("dotenv");


config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://jobooxappec:IVAgz0x72PYCq9tY@cluster0.yenknyq.mongodb.net/";

module.exports = { MONGODB_URI };
