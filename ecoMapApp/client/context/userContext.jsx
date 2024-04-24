import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({})

export function UserContextProvider({children}){ //Gets profile and user info
    const [user, setUser] = useState(null);
    useEffect(() => {
        if(!user){
            axios.get('/profile').then(({data}) =>{
                setUser(data)
            })
        }
    }, [])
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}