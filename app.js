const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const models = require("./models");
const path = require("path");
const session = require("express-session");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const commentsRoutes = require("./routes/comments");
const inputRoutes = require("./routes/input");
const addRatingRoutes = require("./routes/add-rating");
const homeRoutes = require("./routes/home");

app.use(express.urlencoded());
const VIEWS_PATH = path.join(__dirname, "/views");
app.use(bodyParser.urlencoded({ extended: true }));

//Engine configuration
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

//session
app.use(
  session({
    secret: "uydnt",
    resave: false,
    saveUninitialized: false,
  })
);

//Router aiming.
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/", addRatingRoutes);
app.use("/comments", commentsRoutes);
app.use("/input", inputRoutes);
app.use("/home",homeRoutes);

// localhost:3000/css/style.css
app.use("/css", express.static("css"));

//localhost:3000/client.js
app.use(express.static("public"));

//routes
//app.use('/',indexRouter)

app.get("/register", (req, res) => {
  res.render("register");
});
// for (let index = 0; index <= 73; index++) {
//   models.arearatings.destroy({ where: { id: `${index}` } });
// }
// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.post("/register", (req, res) => {
//   let name = req.body.name;
//   let lastname = req.body.lastName;
//   let email = req.body.email;
//   let submit = req.body.submit;

//   let write = models.User.build({
//     name: name,
//     lastname: lastname,
//     email: email,
//     submit: submit,
//   });

//   write.save().then((saved) => {
//     res.redirect("register");
//   });
// });

app.listen(3000, () => {
  console.log("Server is running");
});
