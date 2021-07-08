const chalk = require("chalk");
/**
 * Logging an error with serve level
 * @param {Error} error
 */
const fatalError = (error) => {
  console.error(`${chalk.red(`[⚙]`)} ${chalk.bgRed(error.message)}`);
  console.error(error);
};

module.exports = {
  fatalError,
};
