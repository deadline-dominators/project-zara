const connection = require ("../index.js")
const Admin = require("./adminModel.js")
const Category = require("./categoryModel.js")
const Product = require ("./productModel.js")
const Client = require ("./clientModel.js")
const Seller = require("./sellerModel.js") 


Category.hasMany(Product)
Product.belongsTo(Category) 

Client.belongsToMany(Product, { through: 'Client-Product' })
Product.belongsToMany(Client, { through: 'Client-Product' })


Seller.belongsToMany(Client,{ through: 'Client-Seller' })
Client.belongsToMany(Seller,{ through: 'Client-Seller' })


Seller.belongsToMany(Product, { through: 'Seller-Product' })
Product.belongsToMany(Seller, { through: 'Seller-Product' })

// connection.sync({ alter: true }).then(()=>{console.log("All models were synchronized successfully");}).catch((err)=>{throw err});
// // console.log("All models were synchronized successfully.");