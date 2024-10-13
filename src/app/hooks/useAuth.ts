"use client";
import { useState, useEffect } from 'react';
import { User } from '../types/types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  // Load user data from localStorage on hook initialization
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
  
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser) as User;
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
  }, []);

  // Function to save user data and token to localStorage
   const saveUserData = (user: any) => {
    // Save only the user data in localStorage (no token in this case)
    localStorage.setItem('user', JSON.stringify(user));
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