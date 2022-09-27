const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, ()=> {
    console.log('Connected To Mongodb');
})

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}📦`)
})