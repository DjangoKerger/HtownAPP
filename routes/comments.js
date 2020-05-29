const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/", (req, res) => {
  res.render("comments");
});

router.post("/", (req, res) => {
  let comment = req.body.postBody;
  console.log("commentsjs", req.session);

  let authorid = req.session.userid;
  let neighborhoodid = req.session.neighborhoodid;
  let comments = models.Comment.build({
    authorid: authorid,
    neighborhoodid: neighborhoodid,

    comment: comment,
  });
  comments.save().then((saved) => {
    req.session.neighborhoodid = null;
    res.redirect("/home");
  });
});

module.exports = router;
