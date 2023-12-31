const { Router } = require("express");
const { enpoints } = require("../../util/constant");
const {
    controller: registerController,
    schema: registerSchema,
} = require("../../controllers/auth/register.controller");
const requestValidator = require("../../../../core/middleware/request-validator");
const authRouter = Router();

authRouter.get(
    `${enpoints.API_CONTEXT}/${enpoints.REGISTER}`,
    requestValidator(registerSchema),
    registerController
);

module.exports = authRouter;
