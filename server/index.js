const express = require("express")
const cors = require("cors")
const connection = require("./database/index.js")
const population = require("./database/models/population.js")


const app = express()


const port = 3000
app.use(cors())



app.listen(port,()=>{console.log(`app listenin on port ${port}`);})