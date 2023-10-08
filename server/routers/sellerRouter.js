const express = require ("express")

const sellerRouter = express.Router()

const  {getAll, addSeller,deleteSeller,updateSeller} = require ("../controller/sellerController")
sellerRouter.get("/getSeller",getAll)
sellerRouter.post("/addSeller",addSeller)
sellerRouter.delete("/deleteSeller/:id",deleteSeller)
sellerRouter.put("/updateSeller/:id",updateSeller)

module.exports = sellerRouter
 