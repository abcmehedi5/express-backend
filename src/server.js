const path = require('path');
require("dotenv").config({path: path.resolve(__dirname, `../env/.env.${process.env.NODE_ENV}`)})
const express = require('express');
const log = require('../core/log-setup');
const app = express();

app.get("/", (req, res)=>{
    res.send("Server is running")
})

app.listen(process.env.PORT,()=>{
    log.info("Server started");
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})