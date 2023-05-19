const { sequelize } = require("../models");
const jwt = require("jsonwebtoken");
const authentication = sequelize.models.authentication;
require("dotenv").config();

const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
    const data = await authentication.findOne({
      where: { id: decode.userId },
    });
    if (!data) {
      return res.status(404).json({ message: "Autharization Failed" });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = { authenticateToken };
