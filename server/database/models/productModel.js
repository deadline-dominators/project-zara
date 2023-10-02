const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../index.js")


const Product = connection.define("product",{
name : { type : DataTypes.STRING, allowNull: false},
description : {type : DataTypes.STRING , allowNull: false},
price : {type : DataTypes.INTEGER , allowNull:false}, 
quantity : {type : DataTypes.INTEGER , allowNull:false}, 
size  : {type : DataTypes.ENUM , values : ["XS","S","M","L","XL"]}, 
image : {type : DataTypes.BLOB},
color : {type : DataTypes.ENUM , values : ["white","black","red","blue"]}, 
rate : {type : DataTypes.ENUM , values : ["1","2","3","4","5"]}, 
})
module.exports  = Product