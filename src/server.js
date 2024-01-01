const path = require('path');
require("dotenv").config({path: path.resolve(__dirname, `../env/.env.${process.env.NODE_ENV}`)})
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const log = require('../core/log-setup');
const v1Router = require('./v1/routes/router');
const loggerMiddleware = require('../core/middleware/logger');
const printRoutes = require('../core/router/routes-printer');
const requestSanitizer = require('../core/middleware/request-sanitizer');

const app = express();

app.use(cors({
    origin: "*"
}))
app.use(express.json());
app.use(requestSanitizer);
app.use(loggerMiddleware);

app.get("/", (_req, res)=>{  
    res.status(200).send("Server is running");
});
app.get("/register", (req, res)=>{
    res.send("rohan")
})
app.use(v1Router);
app.use((error, req, res, next)=>{
   log.error("Error occured: "+error.message);
   res.status(500).json({status_code: 500, message: "Internal server error"});
})

mongoose.connect("mongodb://127.0.0.1:27017/apple_ampire").then(()=>{
    console.log("Database connected");
    log.info("Database Connected");
    app.listen(process.env.PORT,()=>{
        printRoutes(v1Router);
        log.info(`Server started on http://localhost:${process.env.PORT}`);
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    })
}).catch((e)=>{
    log.info("Failed to connect with database: "+e.message);
    console.log("Database connection failed");
});
