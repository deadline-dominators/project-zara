const express = require("express")
const routerProduct = express.Router()

const {getAll, getOne, add , deletee, update} = require('../controller/productController')

routerProduct.get('/getAll', getAll)
routerProduct.get('/:name', getOne)
routerProduct.post('/add', add)
routerProduct.delete('/:id', deletee)
routerProduct.put('/:idr', update)

module.exports = routerProduct