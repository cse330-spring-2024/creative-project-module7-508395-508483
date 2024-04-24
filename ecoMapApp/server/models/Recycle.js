const mongoose = require('mongoose');
const {Schema} = mongoose

const recycleSchema = new Schema({
    building: String,
    Recycle: Boolean, 
    
})

const recycleModel = mongoose.model('Recycle', recycleSchema);
module.exports = recycleModel;