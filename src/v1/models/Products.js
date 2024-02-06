const { Schema, model } = require("mongoose");

const ProductsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  offer_price: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  campaingn_product: {
    type: String,
    required: true,
  },
  cam_product_available: {
    type: String,
    required: true,
  },
  cam_product_sale: {
    type: String,
    required: true,
  },
  product_type: {
    type: String,
    required: true,
  },
});

const Products = new model("Products", ProductsSchema);
module.exports = Products;
