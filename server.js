let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let port = 8080;
let calculator = require("./app/routes/calculator");

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => res.json({ message: "Welcome to our Calculator!" }));

// POST api to calculate
// body should contain two variables (a and b) and action -- add(a+b), multiply(a*b), divide(a/b) and subtract(a-b)
// endpoint-> /calculate
app.route("/calculate").post(calculator.calculate);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
