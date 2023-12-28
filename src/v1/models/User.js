const {Schema, Model} = require('mongoose');

const UserSchema = new Schema({
    _id:Schema.Types.UUID,
    name:String,
    user_name:String,
    email:String,
    password: String
})

const User = Model('User', UserSchema);
module.exports = User;