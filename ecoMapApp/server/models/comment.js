const mongoose = require('mongoose');
const {Schema} = mongoose

const commentSchema = new Schema({
    user: String,
    postTo: String, 
    text: String,   
})

const commentModel = mongoose.model('comment', commentSchema);
module.exports = commentModel;