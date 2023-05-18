"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class authentication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  authentication.init(
    {
      username: DataTypes.STRING,
      passwd: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "authentication",
      timestamps: false,
    }
  );
  return authentication;
};
