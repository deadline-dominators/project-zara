const express = require("express")
const routerProduct = express.Router()

const {getAll, getOne, add , deletee, update,filter} = require('../controller/productController')

routerProduct.get('/getAll', getAll)
routerProduct.get("/search/:name",filter)
routerProduct.get('/:name', getOne)
routerProduct.post('/add', add)
routerProduct.delete('/:id', deletee)
routerProduct.put('/:idr', update)

module.exports = routerProduct