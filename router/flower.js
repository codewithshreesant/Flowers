const express=require('express');
const router=express.Router();
const getAllProducts=require('../controller/flower');

router.get('/flowers',getAllProducts);

module.exports=router;