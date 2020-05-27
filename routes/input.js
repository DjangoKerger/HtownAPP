const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/", (req, res) => {
  models.Location.findAll().then(function (result) {
    console.log(result);
  });
  res.send("Hello");
});

module.exports = router;
