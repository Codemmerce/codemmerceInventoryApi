const userMethods = {};
const User = require("../models/user.model")

async function getUser(param){
    return 
}

userMethods.login = (req, res) => {
    const {email,password} = req.body;
};

userMethods.register = (req, res) => {};

userMethods.authenticate = (req, res) => {};

module.exports = userMethods
