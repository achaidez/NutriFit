const express = require("express");
const router = express.Router();

router.get('/getCookies', function (req, res) {
  // Cookies that have not been signed
  //console.log('Cookies: ', req.cookies)
  res.send(req.cookies)
});

module.exports = router;