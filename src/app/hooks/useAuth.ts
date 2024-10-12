"use client";
import { useState, useEffect } from 'react';
import { User } from '../types/types';

// Hook to manage authentication
export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    
    // Load user data from localStorage on hook initialization
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser) as User; // Type assertion to User
            setUser(parsedUser);
        }
    }, []);

    // Function to save user data to localStorage
    const saveUserData = (userData: User) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    // Function to remove user data from localStorage
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return {
        user,
        saveUserData,
        logout,
    };
};
