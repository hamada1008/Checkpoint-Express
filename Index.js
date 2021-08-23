var express = require("express");
bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
const date = new Date().toLocaleDateString("en-us", { weekday: "long" });
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  const day = new Date().getDay();
  const time = new Date().getHours();
  day === 0 || day === 6 || time > 16 || time < 9
    ? res.send("Sorry, we currently are out of working hours")
    : next();
});
app.get("/", (req, res) => {
  const WeekDay = date;
  res.render("index", { WeekDay: WeekDay });
});
app.get("/contact", (req, res) => res.render("contact"));
app.get("/services", (req, res) => res.render("services"));
app.listen(3000, () => null);
