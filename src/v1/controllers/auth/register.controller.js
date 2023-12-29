const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(1).max(128).required(),
    username: Joi.string().min(1)
})

const loginControler = async(req, res, next)=>{
    try{
        console.log("controller in ", Date.now());
        res.send("login page")
    }catch(error){
        next(error);
    }
}

module.exports = {loginControler, schema};