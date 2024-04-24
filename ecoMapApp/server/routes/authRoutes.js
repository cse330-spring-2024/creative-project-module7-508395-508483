const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, resgisterUser, loginUser, getProfile, logoutUser, submitReviewForm, getLocations, sendMessage, getMessages, postComment, getComments, incrementScore } = require('../controllers/authController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/register', resgisterUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.post('/logout', logoutUser)
router.post('/submit-review', submitReviewForm);
router.get('/getLocations', getLocations)
router.post('/send-Message', sendMessage)
router.get('/get-Messages', getMessages)
router.post('/post-comment', postComment)
router.get('/get-comments', getComments)
router.post('/increment-score', incrementScore)

module.exports = router