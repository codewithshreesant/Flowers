require('dotenv').config();
const mongoose=require('mongoose');

const connect = async () => {
    try {
        const db =await mongoose.connect(process.env.DATABASE_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error occured while connecting to database", error);
    }
}
module.exports=connect;