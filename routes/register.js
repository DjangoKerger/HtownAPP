const express = require("express");
const router = express.Router();
const models = require("../models");
var bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/", (req, res) => {
  let username = req.body.userName;
  let password = bcrypt.hashSync(req.body.password, 10);

  let user = models.User.build({
    username: username,
    password: password,
  });

  user.save().then((saved) => {
    res.redirect("/login");
  });
});

module.exports = router;
