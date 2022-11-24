// Configuration - This step has to be on the top level of the file
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const express = require("express");
// Express Router
const router = require("./routes/bootcampRoutes");
// Middlware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");
// Database
const databse = require("./database/db");

const app = express();

// Body Parser
app.use(express.json());

databse();
// Middleware
app.use(logger);

// Mount Router
app.use("/api/v1/bootcamps", router);
// Error Handler = Make sure you place it after Mounting Router
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server runing in ${process.env.NODE_ENV} mode on PORT ${PORT}`);
});
