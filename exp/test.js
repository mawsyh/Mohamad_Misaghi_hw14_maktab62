const express = require("express");
const app = express();
const landingPage = require("./routes/index");
const findingPage = require("./routes/find");
const path = require("path");

// const mongoose = require("mongoose");
// const FactoryModel = require("./models/model.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded());
app.use("/", landingPage);
app.use("/find", findingPage);

// app.get("/", (req, res) => {
//   res.render("index", { dbLog: "", colLog: "" });
// });

// app.post("/", (req, res) => {
//   let dbName = req.body.dbname;
//   const Products = FactoryModel(req.body.colname);
//   //   const product = new Products(JSON.parse(req.body.doc));
//   Products.insertMany(JSON.parse(req.body.doc));
//   console.log(JSON.parse(req.body.doc));

//   // Connecting to the database
//   mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);

//   //   Save Note in the database
//   if (req.body.colname) {
//     try {
//       res.render("index", {
//         dbLog: `Connection was successfully established with your new database "${dbName}."`,
//         colLog: `Collection "${req.body.colname}" created.`,
//       });
//     } catch (err) {
//       console.log(err);
//       res.render("index", {
//         dbLog: "Some error  lo;
//   } else {
//     res.render("index", {
//       dbLog: `Connection was successfully established with your new database "${dbName}."`,
//       colLog: "",
//     });
//   }
// });

app.listen(8000, () => {
  console.log(`Connected on Port 7007`);
});
