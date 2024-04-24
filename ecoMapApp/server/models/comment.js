const mongoose = require('mongoose');
const {Schema} = mongoose

//model for comments
const commentSchema = new Schema({
    user: String,
    postTo: String, 
    text: String,   
})

const commentModel = mongoose.model('comment', commentSchema);
module.exports = commentModel;