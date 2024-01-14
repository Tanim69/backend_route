const express = require("express");

const router = express.Router();



router.use('/registration',(req,res)=>{
    res.json('ami registration done ......')
})

module.exports=router;