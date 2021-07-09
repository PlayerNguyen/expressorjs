const chalk = require("chalk");
/**
 * Logging an error with serve level
 * @param {Error} error
 */
const fatalError = (error) => {
  console.error(`${chalk.red(`[⚙]`)} ${chalk.bgRed(error.message)}`);
  console.error(error);
};

const middlewareError = (err, req, res, next) => {
  // Console logging out
  fatalError(err);
  // Send back to client
  res.status(500).json(err);
};

module.exports = {
  fatalError,
  middlewareError,
};
