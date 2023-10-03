//khalil maymes had bekhlefou 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const Client  = require("../database/models/clientModel.js") 
//middleware to verify existance of a user
const verifyUserLogin = async (email,password)=>{
    try {
        const client = await Client.findOne({where:{email:email}})
        if(!client){
            return {status:'error',error:'client not found'}
        }
        if(await bcrypt.compare(password,client.password)){
            // creating a JWT token
            token = jwt.sign({id:client.id,name:client.name,numberPhone:client.numberPhone,email:client.email,type:'client'},process.env.jwt,{expiresIn:'2h'})
            return {status:'ok',data:token}
        }
        return {status:'error',error:'invalid password'}
    } catch (error) {
        console.log(error);
        return {status:'error',error:'timed out'}
    }
}

// verify token
// const verifyToken = (token)=>{
//     try {
//         const verify = jwt.verify(token,process.env.jwt);
//         if(verify.type==='client'){return true;}
//         else{return false};
//     } catch (error) {
//         console.log(JSON.stringify(error),"error");
//         return false;
//     }
// }


module.exports= {

    signUp :  async (req,res) =>{
        
        try {
            const {name,email,numberPhone,password} = req.body 
            const pass = await bcrypt.hash(password,10)
            const response  = await Client.create({
                name,
                email,
                numberPhone,
                password:pass    
            })
            res.status(200).send(response)
            // return res.redirect("/signin")
          } catch (error) {
            console.log(JSON.stringify(error))
            if (error.code === 11000){
                return res.send({status:'error',error:"email already exist"})
            }
            res.json(error)
          }
    },

    login : async (req,res)=>{
        try {
            const{email,password } = req.body
            const response = await verifyUserLogin(email,password)
            if (response.status==="ok"){
                res.cookie('token',token, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
                // res.redirect('/homePage');
                res.json({message :"login succesfully",response})
            }else{
            res.json(response)
            }
        } catch (error) {
            // throw error
            res.json(error)
        }
    },
    getAllclients : async(req,res)=>{
        try {
            const response = await Client.findAll()
            res.status(200).sedn(response)
        } catch (error) {
            throw error
        }
    }, 




}