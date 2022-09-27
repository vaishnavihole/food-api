const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Fooditem = require('./models/Fooditem');
require('dotenv').config();


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connected To Mongodb');
})

app.get('/health', (req, res) => {
    res.json({
        status: "All Good 👍",
    });
})

app.post('/fooditem', async (req, res) => {

    const { title, description, price, imageurl } = req.body

    const newFooditem = new Fooditem({
        title: title,
        description: description,
        price: price,
        imageurl: imageurl
    })

    const savedFooditem = await newFooditem.save();

    res.json({ savedFooditem })
});

app.get('/fooditem',async(req,res) => {

    const Fooditems =await Fooditem.find();

    res.json(Fooditems);
    
} )


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}📦`)
})