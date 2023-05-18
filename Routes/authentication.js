const express = require("express");
const router = new express.Router();
const { login, signup } = require("../controllers/authentication");

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
