const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  user ? res.send(user) : res.status(401).send("Invalid credentials");
});

module.exports = router;
