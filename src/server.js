const { createWriteStream } = require('fs');
const path = require('path');
require("dotenv").config({path: path.resolve(__dirname, `../env/.env.${process.env.NODE_ENV}`)})
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const log = require('../core/log-setup');
const v1Router = require('./v1/routes/router');
const morgan = require('morgan');
const app = express();
app.use(morgan('common', {
    stream: createWriteStream(path.resolve(__dirname, '../logs/access.log')), 
}))
app.use(cors({
    origin: "*"
}))

app.use(v1Router);

app.use((error, _, res)=>{
   log.error(error.message);
   res.status(500).json({status_code: 500, message: "Internal server error"});
})

mongoose.connect("mongodb://127.0.0.1:27017/apple_ampire").then(()=>{
    console.log("Database connected");
    log.info("Database Connected");
    app.listen(process.env.PORT,()=>{
        log.info(`Server started on http://localhost:${process.env.PORT}`);
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    })
}).catch((e)=>{
    log.info("Failed to connect with database: "+e.message);
    console.log("Database connection failed");
});
