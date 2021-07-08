const express = require("express");
const app = express();
const morgan = require("morgan");

const { fatalError } = require("./utils/errors-handle");

/**
 * Middleware settings here
 */
app.use(morgan("dev"));
app.use(express.static("public"));

/**
 * Initialize stuffs
 */
const users = require("./routers/userRouter");
app.use("/users", users);

/**
 * Export express
 */
module.exports = app;
