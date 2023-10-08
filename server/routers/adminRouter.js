const express = require ("express") 
const adminRouter = express.Router()

const {getAll,addAdmin,deleteAdmin,updateAdmin} = require ("../controller/adminController.js")
adminRouter.get("/getAdmin",getAll)
adminRouter.post("/addAdmin",addAdmin)
adminRouter.delete("/deleteAdmin/:id",deleteAdmin)
adminRouter.put("/updateAdmin/:id",updateAdmin)


module.exports = adminRouter