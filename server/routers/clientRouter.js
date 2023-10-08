const express = require("express")
const clientRouter = express.Router()
const  {signUp,login,getAllclients,getByEmail} = require("../controller/clientController.js") 


clientRouter.post("/singup",signUp)
clientRouter.post("/login",login)
clientRouter.get("/getAllClient",getAllclients)
clientRouter.get("/getEmail/:email",getByEmail)


module.exports = clientRouter