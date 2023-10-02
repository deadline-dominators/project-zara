const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../index.js")


const Seller  = connection.define("seller",{
name : {type: DataTypes.STRING , allowNull : false},
email : {type: DataTypes.STRING , allowNull : false},
numberPhone : {type: DataTypes.INTEGER , allowNull : false},
password : {type: DataTypes.STRING , allowNull : false},
})

module.exports = Seller 