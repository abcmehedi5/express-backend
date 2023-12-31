const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(1).max(128).required(),
    username: Joi.string().min(1),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(12).required()
})

const controller = async(req, res, next)=>{
    try{
        console.log("controller in ", Date.now());
        
    }catch(error){
        next(error);
    }
}

module.exports = {controller, schema};