const express = require("express");
const router = new express.Router();
const { sequelize } = require("../models");
const bcrypt = require("bcrypt");
const authentication = sequelize.models.authentication;

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const logindata = await authentication.findOne({
      where: { id: id },
    });
    res.send(logindata);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedData = await authentication.findOne({
      where: { id: _id },
    });
    await updatedData.update({ username: "XYZ" });
    res.json({ updatedData });
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const logindata = await authentication.findOne({
      where: { id: _id },
    });
    console.log("Before deletion");
    await logindata.destroy();
    res.send(logindata);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
