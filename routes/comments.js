const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/", (req, res) => {
  res.render("comments");
});

router.post("/", (req, res) => {
  let comment = req.body.description;
  console.log("commentsjs", req.session);

  let authorid = req.session.userid;

  let comments = models.Comment.build({
    authorid: authorid,
    neighborhoodid: neighborhoodid,

    comment: comment,
  });
  comments.save().then((saved) => {
    res.redirect("/login");
  });
});

module.exports = router;
