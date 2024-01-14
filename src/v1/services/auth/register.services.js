const bcrypt = require('bcrypt');
const User = require("../../models/User");

const registerService = async(req)=>{
    return register(req.body);
}

const register = async({name, username, email, password, })=>{
    const user = new User({
        name: name,
        email: email,
        username: username,
        password: generatePassword(password)
    });
    if(await user.save()){
        return true;
    }
    return false;
}

const generatePassword = async(password)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

module.exports = registerService;