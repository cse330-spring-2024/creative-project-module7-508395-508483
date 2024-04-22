import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import React from 'react';


export default function Login(){
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user, navigate]);
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const {email, password} = data
        try { 
            const {data} = await axios.post('/login',{
                email,
                password
            });
            if(data.error) {
                toast.error(data.error)
            } else {
                setData({});
                navigate('/Dashboard')
                window.location.reload(); // Refresh the page
            }
        } catch (error){
            
        }
    }

    return (
        <div>
            <form onSubmit={loginUser}>
            <label> Email </label>
                <input type= "email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                <label> Password </label>
                <input type= "password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}