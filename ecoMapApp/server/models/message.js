const mongoose = require('mongoose');
const {Schema} = mongoose

const messageSchema = new Schema({
    sender: String,
    message: String, 
    
})

const messageModel = mongoose.model('message', messageSchema);
module.exports = messageModel;