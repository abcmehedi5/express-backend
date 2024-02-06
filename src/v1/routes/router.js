const {Router} = require('express');
const authRouter = require('./auth/auth-router');
const productRouter = require('./products/products.route');

const v1Router = Router();

v1Router.use(authRouter);
v1Router.use(productRouter)
module.exports = v1Router;