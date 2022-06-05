import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { api, loginApi } from '../services/api'


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');


        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = async (email, senha) => {
        const response = await loginApi(email, senha);


        const loggerUser = response.data.user;
        const token = response.data.token;


        localStorage.setItem('user', JSON.stringify(loggerUser));
        localStorage.setItem('token', token);


        api.defaults.headers.Authorization = `Bearer ${token}`;


        setUser(loggerUser);
        navigate('/');

    }

    const logout = () => {
        console.log('logout');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/login')
    };

    return (
        <AuthContext.Provider value={{
            authenticated: !!user,
            user,
            loading,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}