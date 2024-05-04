require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express')
const app = express();
const flower=require('./router/flower');
const connect=require('./connectdb');

app.use('/api', flower);

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>")
})

connect();

const server = async () => {
    try {
        app.listen(process.env.PORT || 3000, (req, res) => {
            console.log(`The server is listening at port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error occured while connecting to server");
    }
}

server();