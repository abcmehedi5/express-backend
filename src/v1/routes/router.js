const {Router} = require('express');
const authRouter = require('./auth/auth-router');

const v1Router = Router();

v1Router.use(authRouter);
module.exports = v1Router;