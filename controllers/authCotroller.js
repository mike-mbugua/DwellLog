const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

const signToken = (id) => {
  return jwt.sign({ id }, secretKey, {
    expiresIn: "10D",
  });
};

exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = signToken(user.id);

    return res
      .status(201)
      .json({ msg: "User created successfully", token, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
