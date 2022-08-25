const userMethods = {};
require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function getUser(param) {
  try {
    return User.findOne(param);
  } catch (error) {
    return false;
  }
}

userMethods.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await getuser({ email });
  if (user) {
    const verifyPassword = await user.verifyPassword(password);
    if (!verifyPassword) {
      return res.status(400).json({
        status: false,
        message: "Email or password incorrect",
      });
    }
    try {
      const token = jwt.sign(user.id.toString(), process.env.PRIVATE_KEY);

      return res.status(200).json({
        status: true,
        token,
        message: "Login Correct",
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: "Hay un problema, porfavor intenta de nuevo",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      message: "Email or password incorrect",
    });
  }
};

userMethods.register = (req, res) => {};

userMethods.authenticate = (req, res) => {};

module.exports = userMethods;
