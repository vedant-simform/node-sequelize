const { sequelize } = require("../models");
const bcrypt = require("bcrypt");
const authentication = sequelize.models.authentication;
jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { username, passwd } = await req.body;
    const logindata = await authentication.findOne({
      where: { username },
    });
    const status = await bcrypt.compare(passwd, logindata.passwd);
    if (status) {
      res.status(200).json({ message: "Authentication successful" });
    } else {
      res.status(401).json({ message: "Authentication Failed" });
    }
  } catch (Error) {
    res.json({ Error });
  }
}

async function signup(req, res) {
  try {
    let { username, passwd } = req.body;
    passwd = await bcrypt.hash(passwd, 10);
    await authentication.create({ username, passwd });
    res.status(200).json({ message: "Data Entry Successfull" });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { login, signup };
