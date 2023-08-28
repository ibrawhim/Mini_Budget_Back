const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
let budgetRouter = require('./routes/budget.route')
app.use(bodyParser.urlencoded({extended:true}))
const cors = require('cors')
app.use(cors())
// app.use(express.json())
app.use('/budget',budgetRouter)




let port = process.env.PORT





app.listen(port,()=>{
    console.log(`app listening at port ${port}`);
})