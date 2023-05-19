const express = require("express");
const router = new express.Router();
const { login, signup } = require("../controllers/authentication");
const { authenticateToken } = require("../middleware/auth");

router.post("/login", login);
router.post("/signup", signup);

router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Authorize sucessful" });
});

module.exports = router;
