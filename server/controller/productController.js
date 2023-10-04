const Product = require('../database/models/productModel')


module.exports = {
    getAll : async (req,res)=>{
        try {
            const result = await Product.findAll()
            res.json(result)
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=> {
        try {
            const result = await Product.findAll({where : {name:req.params.name}})
            res.json(result)
        } catch (error) {
            throw error
        }
    },
    add : async(req,res)=>{
        try {
            const result = await Product.create(req.body)
            res.json(result)
        } catch (error) {
            throw error
        }
    },
    deletee : async (req,res)=>{
        try {
            const result= await Product.destroy({where:{id:req.params.id}})
            res.json(result)
        } catch (error) {
            throw error
        }
    },
    update : async (req,res)=>{
     try { 
        const result = await Product.update(req.body, {where:{id:req.params.id}})
        res.json(result)
     } catch (error) {
        throw error
     }

    }

}