const express = require("express");
const router = express.Router();
const models = require("../models");
var bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  let username = req.body.userName;
  let password = req.body.password;

  models.User.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user == null) {
      res.render("login", { message: "Username not found" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        //   console.log(user);
        req.session.user = user.username;
        req.session.userid = user.id;
        console.log(req.session);
        // console.log(user.id);
        res.redirect("/location");
      } else {
        res.render("login", { message: "password is incorrect" });
      }
    }
  });
});

module.exports = router;
