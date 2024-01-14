const express = require("express");

const router = express.Router();
const apiRoute=require('./api');

const api = process.env.SECRET_API

router.use(api,apiRoute)


module.exports=router;