const mongoose = require('mongoose');
const {Schema} = mongoose

//model for messages
const messageSchema = new Schema({
    sender: String,
    message: String, 
    
})

const messageModel = mongoose.model('message', messageSchema);
module.exports = messageModel;