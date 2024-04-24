const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const locationModel = require('./models/location')
const messageModel = require('./models/message');
const commentModel = require('./models/comment');

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('database connected'))
.catch((err)=> console.log('database not connected', err))

app.get('/getLocation', (req, res) => {
    locationModel.find()
    .then(Location => res.json(Location))
    .catch (err => res.json(err))
})

app.get('./get-Messages', (req, res) => {
    messageModel.find()
    .then(message => res.json(message))
    .catch(err => res.json(err))
})

app.get('./get-comments', (req, res) => {
    commentModel.find()
    .then(comment => res.json(comment))
    .catch(err => res.json(err))
})

//middleware 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))


app.use('/', require('./routes/authRoutes'))    

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))