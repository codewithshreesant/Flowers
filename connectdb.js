require('dotenv').config();
const mongoose=require('mongoose');

const connect = async (Database) => {
    try {
        const db =await mongoose.connect(Database);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error occured while connecting to database", error);
    }
}
module.exports=connect;