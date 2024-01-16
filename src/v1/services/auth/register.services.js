const bcrypt = require('bcrypt');
const User = require("../../models/User");
const uuid = require('uuid');
const registerService = async(req)=>{
    return register(req.body);
}

const register = async({name, username, email, password, })=>{
    const user = new User({
        _id: uuid.v4(),
        name: name,
        email: email,
        username: username,
        password: await generatePassword(password)
    });
    if(await user.save()){
        return true;
    }
    return false;
}

const generatePassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

module.exports = registerService;