import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setUser, login, logout }}>

        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
