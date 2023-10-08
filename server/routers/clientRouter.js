const express = require("express")
const clientRouter = express.Router()
const  {signUp,login, getAllclients} = require("../controller/clientController.js") 


clientRouter.post("/singup",signUp)
clientRouter.post("/login",login)
clientRouter.get("/getAll", getAllclients)



module.exports = clientRouter