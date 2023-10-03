const express = require("express")
const clientRouter = express.Router()
const  {signUp,login} = require("../controller/clientController.js") 


clientRouter.post("/singup",signUp)
clientRouter.post("/login",login)



module.exports = clientRouter