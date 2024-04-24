const mongoose = require('mongoose')
const {Schema} = mongoose

//user model
const userSchema = new Schema({
    name: String, 
    email: {
        type: String,
        unique:true
    },
    password: String,
    ecoScore: Number
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;