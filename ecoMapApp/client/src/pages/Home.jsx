import { useContext, useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/userContext";
import axios from "axios";
import React from 'react';
import {toast} from 'react-hot-toast';

    
export default function Home() {
    const { user } = useContext(UserContext);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [showMessageForm, setShowMessageForm] = useState(false); // State to control the visibility of the message form
    const [showMessageTable, setShowMessageTable] = useState(false);
    const [showCommentForm, setCommentForm] = useState(false);
    const [messages, setMessages] = useState([]);
    const fetchMessages = async () => {
        try {
            const response = await axios.get('/get-Messages');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };
    const toggleMessageTable = () => {
        setShowMessageTable(!showMessageTable);
    };
    useEffect(() => {
        fetchMessages();
    }, []);


    const [reviewData, setReviewData] = useState({
        reviewer: user ? user.name : '',
        name: '',
        Review: '',
        Score: '',
    });
    console.log(reviewData);

    // Check if user is logged in
    if (!user) {
        console.log("not logged in")
        // If not logged in, redirect to the login page
        return <Navigate to="/login" />;
    }
    const navigate = useNavigate();

    
    
    // Function to handle the redirection to the dashboard
    const redirectToDashboard = () => {
        navigate('/dashboard');
    };

    const handleLogout = () => {
        try {
             axios.post("/logout");
             window.location.reload(); 
            navigate("/login");

        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    
    const toggleReviewForm = () => {
        setShowReviewForm(!showReviewForm);
    };

    const toggleCommentForm = () => {
        setCommentForm(!showCommentForm);
    }

const [commentData, setCommentData] = useState({
        user: user ? user.name : '',
        postTo: '',
        text: ''
    })
    const postComment = async (e) => {
        e.preventDefault();
        try{
            setCommentData({ ...commentData, user: user.name }); // Set user name in commentData
            await axios.post('/post-comment', commentData);
           setCommentData({ user: '', postTo: '', text: '' }); // Reset the form after submission
           toast.success('Comment posted successfully.');
        } catch (error) {
            toast.error('Failed to comment.');
            console.error('Error posting comment:', error);
        }
    };

    const registerReview = async (e) => {
        e.preventDefault();
        const {reviewer,name, Review, Score} = reviewData
        try{
            const{reviewData} = await axios.post('/submit-review', {
                reviewer, name, Review, Score
            })
            if (reviewData.error){
                toast.error(reviewData.error)
            } else {
                setReviewData({})
                toast.success('Review Successful.')
            }
            } catch (error){
                console.log(error)
            }
        }
    
        const [messageData, setMessageData] = useState({
            username: user ? user.name : '',
            message: '',
        });
        const openMessageForm = () => {
            setShowMessageForm(true);
        };
        const closeMessageForm = () => {
            setShowMessageForm(false);
        };
        const sendMessage = async (e) => {
            e.preventDefault();
            try {
                // Set sender's name in message data
                setMessageData({ ...messageData, username: user.name }); // Ensure 'username' matches the field name in the backend
                await axios.post('/send-message', messageData);
                setMessageData({ username: '', message: '' }); // Reset the form after submission
                toast.success('Message sent successfully.');
            } catch (error) {
                toast.error('Failed to send message.');
                console.error('Error sending message:', error);
            }
        };
    

    return (
    
        <div>
            <div style={{ position: 'absolute', top: 0, right: 0, margin: '20px', fontSize: '18px' }}>
                    Score: 0
                </div>
            <h1>Home</h1>
            {!!user && (<h2>Hi {user.name}!</h2>)}

            {/* Button to trigger the redirection */}
            <button onClick={redirectToDashboard}>Go to Map</button>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={toggleReviewForm}>Leave a Review & Rating</button>
            <button onClick={openMessageForm}>Send Message</button>
            <button onClick={toggleCommentForm}>Post a Comment</button>
           
            {showReviewForm && (
               <form onSubmit={registerReview}>
               <label>Review & Rating: </label>
               <input type="text" placeholder='enter place...' value={reviewData.name} onChange={(e) => setReviewData({...reviewData, name: e.target.value})} />
                <input type="text" placeholder='enter review...' value={reviewData.Review} onChange={(e) => setReviewData({...reviewData, Review: e.target.value})}/>
                <input type="number" placeholder='enter rating...' value={reviewData.Score} onChange={(e) => setReviewData({...reviewData, Score: e.target.value})}/>
               <button type="submit">Submit Review</button>
           </form>
           )}

            {showCommentForm && (
                <form onSubmit={postComment}>
                    <label>Comment on Review: </label>
                    <input type="text" placeholder='review Id...' value = {commentData.postTo} onChange={(e) => setCommentData({...commentData, postTo: e.target.value})}/>
                    <input type="text" placeholder='enter comment...' value={commentData.text} onChange={(e) => setCommentData({...commentData, text: e.target.value})}/>
                    <button type="submit">Submit Comment</button>
                </form>
            )}

             {showMessageForm && (
        <form onSubmit={sendMessage}>
            <label>Message:</label>
            <input type="text" value={messageData.message} onChange={(e) => setMessageData({ ...messageData, message: e.target.value })} />
            <button type="submit">Send</button>
            <button onClick={closeMessageForm}>Cancel</button>
        </form>)}

        <button onClick={toggleMessageTable}>Show Messages</button>
            {showMessageTable && <MessageTable messages={messages} />}
        </div>
        
        
    );
}

function MessageTable({ messages }) {
    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center '>
            <div className='w-50 mt-50'> {/* Add margin top to move the table lower */}
            {/* <div style={{ position: 'absolute', top: 0, right: 0, margin: '20px', fontSize: '18px' }}>
                Score: 0
            </div> */}
                <table className='table'>
                    <thead>
                        <tr>
                            <th style={{ paddingRight: '150px' }}>Sender</th>
                            <th style={{ paddingRight: '150px' }}>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map(message => (
                            <tr key={message._id}>
                                <td style={{ paddingRight: '150px' }}>{message.sender}</td>
                                <td style={{ paddingRight: '150px' }}>{message.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
