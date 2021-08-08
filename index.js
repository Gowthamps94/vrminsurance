const express = require('express');
const app = express();
var cors = require('cors') 
const { connection } = './config/database.js'
require("dotenv").config();

const userRouter = require('./api/user/user.router')
const pool = require("./api/user/db")

app.use(express.json());
app.use(cors());
app.use("/api", userRouter);



pool.connect()
    .then(()=> console.log("connected pgadmin succesfully"))
      

app.listen(process.env.APP_PORT, () => {
  console.log(`Express server listening on port`, process.env.APP_PORT);
});