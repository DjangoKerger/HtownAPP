const express = require("express");
const router = express.Router();
const models = require("../models");
var bcrypt = require("bcryptjs");

router.get("/add-rating", (req, res) => {
  let areaArray = [];
  models.Location.findAll()
    .then((results) => {
      results.forEach((specificName) => {
        let areaID = specificName.dataValues.id;
        let value = specificName.dataValues.name;
        let objectToPush = { value, areaID };
        areaArray.push(objectToPush);
      });
    })
    .then(() => {
      res.render("views/input.mustache", { areaArray: areaArray });
    });
});

router.post("/add-rating", (req, res) => {
  let parkRatings = parseInt(req.body.parksRating);
  let schoolRatings = parseInt(req.body.schoolsRating);
  let homeRatings = parseInt(req.body.homesRating);
  let entertainmentRatings = parseInt(req.body.entertainmentRating);
  let area = parseInt(req.body.places);
  req.session.neighborhoodid = area
  models.arearatings
    .create({
      areaID: area,
      parks: parkRatings,
      entertainment: entertainmentRatings,
      schools: schoolRatings,
      homes: homeRatings,
    })
    .then((results) => {
      res.redirect('/comments');
    })
    .catch((err) => {
      console.log(err);
    });
});

//   models.arearatings.findAll({ where: { areaID: 2 } }).then((areaResult) => {
//   });
//   models.arearatings
//     .update({ areaid: 2 }, { where: { parks: 5 } })
//     .then((results) => {
//       console.log(results);
//     });

module.exports = router;
