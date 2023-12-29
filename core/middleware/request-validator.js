const joi = require('joi');

const requestValidator = (req, res, next)=>{
    return (schema)=>{
        if(schema.validate(req.body)){
            
        }
    }
}

module.exports = requestValidator;