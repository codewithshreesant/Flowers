const mongoose=require('mongoose');

const flowerSchema=new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required:[true, "description must be provided"]
    },
    rating: {
        type: Number, 
        required: true, 
        default: 3
    },
    price:{
        type:Number, 
        required:true
    },
    img:{
        type: String, 
        required: true
    }
})

const flowerModel=mongoose.model('FLower', flowerSchema);

module.exports=flowerModel;