/*
 * POST /calculate to calculate.
 */
function calculate(req, res) {
  // your code goes here
  res.json({ message: "go to /app/routes/calculator to edit code!" });
}

//export all the functions
module.exports = { calculate };
