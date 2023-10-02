const { Sequelize, DataTypes, DATE } = require("sequelize");
const connection = require("../index.js")


const Client  = connection.define("client",{

name : {type: DataTypes.STRING , allowNull : false},
email : {type: DataTypes.STRING , allowNull : false},
numberPhone : {type: DataTypes.INTEGER , allowNull : false},
password : {type: DataTypes.STRING , allowNull : false},
})


module.exports = Client 