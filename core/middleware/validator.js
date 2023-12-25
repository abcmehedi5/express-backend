const joi = require('joi');
const validator = (req, res, next)=>{
    return (schema)=>{
        if(schema.validate(req.body)){
            
        }
    }
}