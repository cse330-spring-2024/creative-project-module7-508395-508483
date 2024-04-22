import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/userContext";
import axios from "axios";
import React from 'react';

export default function Home() {
    const { user } = useContext(UserContext);

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

    return (
    
        <div>
            <h1>Home</h1>
            {!!user && (<h2>Hi {user.name}!</h2>)}
            {/* Button to trigger the redirection */}
            <button onClick={redirectToDashboard}>Go to Dashboard</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
