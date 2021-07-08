const express = require("express");
const router = express.Router();

/**
 * Code here
 */
router.get("/", (req, res, next) => {
  res.end("user interface");
});

module.exports = router;
