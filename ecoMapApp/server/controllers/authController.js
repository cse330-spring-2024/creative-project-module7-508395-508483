const User = require('../models/user');
const { hashPassword, comparePassword } = require ('../helpers/auth');
const jwt = require('jsonwebtoken');
const { json } = require('express')
const Review = require('../models/location')
const Location = require('../models/location')
const message = require('../models/message')
const comment = require('../models/comment')

const test = (req, res) => {
    res.json('test is working')
}

//register endpoint
const resgisterUser = async (req, res) => {
    try {
        const {name, email, password, ecoScore} = req.body;
        //check if name is entered
        if (!name){
            return res.json({
                error: 'name is required'
            })
        };
        //check if pw is good
        if (!password || password.length < 6){
            return res.json({
                error: 'password is required and at least 6 characters long'
            })
        };
        //check email 
        const exist = await User.findOne({email});
        if (exist){
            return res.json({
                error: 'Email is taken already'
            })
        }
        if (!email){
            return res.json({
                error: 'Email is required'
            })
        }

        const hashedPassword = await hashPassword(password)
        //create user to database
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword,
            ecoScore: 0
        });

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

//login endpoint
const loginUser = async (req, res) => {
    try { 
        const {email, password} = req.body;
        if (!email){
            return res.json({
                error: 'No Email'
            })
        }
        //check if user exists
        const user = await User.findOne({email});
        if (!user){
            return res.json({
                error: 'No user found'
            })
        }

        //check if password match
        const match = await comparePassword(password, user.password)
        if (match){
         jwt.sign({email: user.email, id: user._id, name: user.name, ecoScore: user.ecoScore}, process.env.JWT_SECRET, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json(user)
         })            
        }
        if (!match){
            res.json({
                error: "Password do not match"
            })
        }
    } catch (error){
        console.log(error)
    }
}

const getProfile= (req, res) => {
    const{token} = req.cookies
    if (token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user)=>{
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('token'); // Clear the token cookie
    res.sendStatus(200);
};

// const submitReviewForm = async (req, res) => {      
//     try {
//         const { reviewer, name, Review, Score } = req.body;
//         if (!reviewer || !name || !Review || !Score) {
//             return res.status(400).json({ error: 'All fields are required.' });
//         }
//         const newReview = await Review.create({
//             reviewer,
//             name,
//             Review,
//             Score,
//         });

//         await newReview.save();

//         return res.status(201).json({ message: 'Review submitted successfully.' });
//     } catch (error) {
//         console.error('Error submitting review:', error);
//         return res.status(500).json({ error: 'Internal server error.' });
//     }
// };

const submitReviewForm = async (req, res) => {
    try {
        const {reviewer, name, Review, Score} = req.body;
        //check if name is entered
        if (!name){
            return res.json({
                error: 'name is required'
            })
        };
        //check if review 
        if (!Review){
            return res.json({
                error: 'Review is required'
            })
        };
        //check score 
        if (!Score){
            return res.json({
                error: 'Score is required'
            })
        }
        //create Review to database
        const user = await Location.create({
            reviewer,
            name, 
            Review, 
            Score,
        });

        return res.status(200).json({ message: 'Review submitted successfully.' });
    } catch (error) {
        console.log(error)
    }
}

const getLocations = async (req, res) => {
    const locations = await Location.find({}).sort({createdAt: -1})
    res.status(200).json(locations)
}

const getRecycle = async (req, res) => {
    const Recycles = await Recycle.find({}).sort({createdAt: -1})
    res.status(200).json(Recycles)
}

const getMessages = async (req, res) => {
    const messages = await message.find({}).sort({createdAt: -1})
    res.status(200).json(messages)
}

const sendMessage = async (req, res) => {
    try {
        const { username, message: newMessage } = req.body; // Extract 'username' instead of 'sender'
        if (!username) {
            return res.json({
                error: "Sender's name is required"
            });
        }
        // Create new message with sender's name
        const newMessageModel = await message.create({
            sender: username, // Use 'username' as the sender's name
            message: newMessage,
        });
        return res.status(200).json({ message: 'Message submitted successfully.' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

const postComment = async (req, res) => {
    try {
        const { user, postTo, text } = req.body; // Extract 'username' instead of 'sender'
        if (!postTo) {
            return res.json({
                error: "Must specifiy what your commenting to"
            });
        }
        if (!text){
            return res.json({
                error: "Must have comment content"
            })
        }
        const commentModel = await comment.create({
            user: user, // Use 'username' as the sender's name
            postTo: postTo,
            text: text
        });
        return res.status(200).json({ message: 'Comment posted successfully.' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}

const getComments = async (req, res) => {
    const comments = await comment.find({}).sort({createdAt: -1})
    res.status(200).json(comments)
}

const incrementScore = async (req, res) => {
    try{
    const { email } = req.body;
    console.log("in authconroller");
    console.log(email);
    const user = await User.findOne({email})
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    user.ecoScore += 1;
    console.log("+1");
    await user.save();
    return res.status(200).json({ user, updatedScore: user.ecoScore });
    } catch (error) {
        console.error('Error incrementing score:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    test,
    resgisterUser,
    loginUser,
    getProfile,
    logoutUser,
    submitReviewForm,
    getLocations,
    sendMessage,
    getMessages,
    postComment,
    getComments,
    incrementScore
};