const mongoose = require('mongoose')
const foodSchema = mongoose.Schema({
    title: {type:String, require:true},
    description: {type:String, require:true},
    price : {type:Number, require:true},
    imageurl : {type:String, require:true}
});

module.exports = mongoose.model('Fooditem',foodSchema);