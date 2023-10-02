const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../index.js");


const Category = connection.define("category", {
  categoryName: { type: DataTypes.STRING, allowNull: false },
});
module.exports = Category;
