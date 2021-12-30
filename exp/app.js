const express = require("express");
const app = express();
const landingPage = require("./routes/index");
const findingPage = require("./routes/find");
const path = require("path");
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", landingPage);
app.use("/find", findingPage);

app.listen(PORT, () => {
  console.log(`Connected on Port ${PORT}`);
});
