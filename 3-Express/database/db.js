const mongoose = require("mongoose");

const db = process.env.DATABASE_URI;

const database = async () =>
  await mongoose
    .connect(db)
    .then(() => console.log("Connected to database"))
    .catch((e) => console.log(e));

module.exports = database;

// const dotenv = require("dotenv");

// dotenv.config({ path: "./config/config.env" });
