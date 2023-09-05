const express = require("express")
const cors = require("cors")
const path = require('path')
require('dotenv').config({path : path.join(__dirname,'../.env')})

const router = require('./routes/auth.route')

const app = express();

app.get('/',(req,res) => {
    res.status(200).send({msg : "Server run", env : process.env.NODE_ENV})
})

app.use(express.json());
app.use(cors({origin : true}))
app.use('/', router)

module.exports = app