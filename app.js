const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const { middlewareError } = require("./utils/errors-handle");
const users = require("./routers/userRouter");
/**
 * Middleware settings here
 */
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Initialize stuffs
 */
app.use("/users", users);

/**
 * Closed middleware
 *  to handle errors
 */
app.use(middlewareError);

/**
 * Export express
 */
module.exports = app;
