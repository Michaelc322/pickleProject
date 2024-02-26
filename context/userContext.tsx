import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({children}: {children: React.ReactNode}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if(!user){
            axios.get('/verify').then(({data}) => {
                setUser(data);
            })
        }
    }, [])
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}