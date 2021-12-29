const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myapp");
// async function main() {
//   const productSchema = new mongoose.Schema({
//     type: String,
//     title: String,
//     description: String,
//     shipping: Object,
//     pricing: Object,
//     details: Object,
//   });
console.log(mongoose.connection);
s;
const productSchema = new mongoose.Schema({
  type: String,
  title: String,
  description: String,
  shipping: Object,
  pricing: Object,
  details: Object,
});
const Product = mongoose.model("Product", productSchema);
const silence = new Product({ namengo: "Silence" });
// await silence.save();
// console.log(silence);
