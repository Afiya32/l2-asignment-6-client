"use client";
import { useState, useEffect } from 'react';
import { User } from '../types/types';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
  
    // Load user data from localStorage on hook initialization
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (storedUser && token) {
        const parsedUser = JSON.parse(storedUser) as User;
        setUser(parsedUser);
      }
    }, []);
  
    // Function to save user data and token to localStorage
    const saveUserData = (userData: User, token: string) => {
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', token); // Save the token separately
      setUser(userData);
    };
  
    // Function to remove user data from localStorage
    const logout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setUser(null);
    };
  
    return {
      user,
      saveUserData,
      logout,
    };
  };
