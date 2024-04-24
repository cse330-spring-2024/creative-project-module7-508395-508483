const mongoose = require('mongoose');
const {Schema} = mongoose

//model for location (reviews)
const locationSchema = new Schema({
    reviewer: String,
    name: String, 
    Review: String,
    Score: {
        type: Number,
        min: 0, 
        max: 5 
    }    
})

const locationModel = mongoose.model('Location', locationSchema);
module.exports = locationModel;