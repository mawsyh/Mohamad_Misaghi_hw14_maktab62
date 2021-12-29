const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  type: String,
  title: String,
  description: String,
  shipping: Object,
  pricing: Object,
  details: Object,
});

// module.exports = mongoose.model("dodols", productSchema);

module.exports = function FactoryModel(modelName) {
  return mongoose.model(modelName, productSchema);
};
