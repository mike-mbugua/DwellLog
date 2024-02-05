const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;

exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({ msg: "User created successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
