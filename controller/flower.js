const flowerModel=require('../models/schandmd');

const getAllProducts=async (req,res)=>{
    const data=await flowerModel.find(req.query)
    res.json({data});
}



module.exports=getAllProducts;