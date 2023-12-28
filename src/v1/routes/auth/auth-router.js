const { Router } = require("express");
const {enpoints} = require('../../util/constant');
const loginControler = require("../../controllers/auth/login.controller");
const authRouter = Router();

authRouter.get(`/${enpoints.API_CONTEXT}/${enpoints.LOGIN}`, loginControler);

module.exports = authRouter;