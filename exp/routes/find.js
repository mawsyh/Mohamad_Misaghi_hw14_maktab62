const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FactoryModel = require("../models/model.js");

router.get("/", (req, res) => {
  res.render("find");
});

router.post("/", async (req, res) => {
  let dbName = req.body.dbname;
  mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
  const Products = FactoryModel(req.body.colname);
  let searchThis = `${req.body.find}`;
  if (!searchThis) searchThis = "";
  console.log(typeof searchThis);
  const foundData = await Products.find({});
  console.log(foundData);
  res.send(foundData);

  // Connecting to the database

  //   Save Note in the database
  //   if (req.body.colname) {
  //     try {
  //       value =
  //         "Create Database" >
  //         res.render("index", {
  //           dbLog: `Connection was successfully established with your new database "${dbName}."`,
  //           colLog: `Collection "${req.body.colname}" created.`,
  //         });
  //     } catch (err) {
  //       res.render("index", {
  //         dbLog: "Some error occurred while creating the Note.",
  //         colLog: "",
  //       });
  //     }
  //   } else {
  //     res.render("index", {
  //       dbLog: `Connection was successfully established with your new database "${dbName}."`,
  //       colLog: "",
  //     });
  //   }
});

module.exports = router;
