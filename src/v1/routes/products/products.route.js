const { Router } = require("express");
const { controller:productController } = require("../../controllers/products/products.controller");
const { enpoints } = require("../../util/constant");

const productRouter = Router()
productRouter.get(`${enpoints.API_CONTEXT}/products`,productController)

module.exports = productRouter