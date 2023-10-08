const express = require ("express") 
const categoryRouter = express.Router()
const {getAll,addCategory,deleteCategory,updateCategory } = require ("../controller/category.controller.js")


categoryRouter.get("/getCategory",getAll)
categoryRouter.post("/addCategory",addCategory)
categoryRouter.delete("/deleteCategory/:id",deleteCategory)
categoryRouter.put("/update/id",updateCategory)

module.exports = categoryRouter