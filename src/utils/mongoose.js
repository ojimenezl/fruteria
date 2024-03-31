const mongoose = require("mongoose");
const connect = mongoose.connect;

const { MONGODB_URI } = require("../config.js");

// connection to db
(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("Db connected to", db.connection.name);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();
