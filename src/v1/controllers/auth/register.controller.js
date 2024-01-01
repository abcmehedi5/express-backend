const Joi = require('joi');
const registerService = require('../../services/auth/register.services');
const {response} = require('../../util/constant');
const log = require('../../../../core/log-setup');

const schema = Joi.object({
    name: Joi.string().min(1).max(128).required(),
    username: Joi.string().min(1),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(12).required()
})

const controller = async(req, res, next)=>{
    try{
        log.info("Requested: "+JSON.stringify(req.body));
        const data = await registerService(req);
        res.json({
            message: response.SUCCESS.CONTENT,
            status_code: response.SUCCESS.STATUS,
            data
        })
    }catch(error){
        console.log("error");
        next(error);
    }
}

module.exports = {controller, schema};