const express = require("express");

const router = express.Router();
const AuthRouter=require('./registration')




router.use('/authentication',AuthRouter)


module.exports=router;