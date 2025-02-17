const flowerModel=require('../models/schandmd');
const connect=require('../connectdb');
const productJson=require('../products.json')

const keepData=async ()=>{
    try{
    await connect();
    await flowerModel.create(productJson);
    console.log("success");
    }catch(error){
        console.log("Failed to keep Data", error);
    }
}

module.exports = keepData;