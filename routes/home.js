const express = require("express");
const router = express.Router();
var bcrypt = require("bcryptjs")

router.get("/", (req,res)=>{
    res.render("home");
});


module.exports = router;