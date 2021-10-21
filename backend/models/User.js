const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const schemaOptions = {
    timestamps: true
};

const userSchema = new Schema({
    username: {String, unique: true},
    email: {String, unique: true},
    password: String,
}, schemaOptions);
//In the future when password hashing is implemented
//You will need to access the userSchema.pre middleware and call the function
//That you are defining down below


let User = mongoose.model('User', userSchema);
module.exports = User;
