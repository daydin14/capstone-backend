// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

// Initialize Express App
const app = express();

// Configure App Settings
require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;

// Connect to MongoDB
mongoose.connect(MONGODB_URL);

// Mongo Status Listeners
mongoose.connection
  .on("connected", () => console.log("Connected to MongoDB"))
  .on("close", () => console.log("Disconnected from MongoDB"))
  .on("error", (error) => console.log(`Error with MongoDB: ${error}`));

// Mount MiddleWare
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Express Listener
app.listen(PORT, () => {
  console.log.apply(`Express is listening on PORT: ${PORT}`);
});
