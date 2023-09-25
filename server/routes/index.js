const express = require("express");

// creating a router
const router = express.Router();

// configuring routes
router.get("/", (req, res) => {
  // console.log("request", req)
  // console.log("response", res)
  // sending the response
  res.send("Hello!! 👋");
});
module.exports = router;
