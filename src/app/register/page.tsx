"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [isSignup, setIsSignup] = useState(false);
    const { saveUserData } = useAuth(); // Assuming your useAuth has this function to save user data
  const router=useRouter()
    const toggleAuthMode = () => {
        setIsSignup(!isSignup);
    };

    const handleSignup = async (event:any) => {
        event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const address = form.address.value;
  const phone = form.phone.value;
  const photoUrl = form.photoUrl.value;

  try {
    const response = await axios.post('https://gardening-platform-backend.vercel.app/api/users/signup', {
      name,
      email,
      password,
      address,
      phone,
      photoUrl,
      role: 'user',
    });

    const { user, token } = response.data.data;
    
    saveUserData(user, token); // Save user and token
    router.push('/');
    Swal.fire({
      icon: 'success',
      title: 'Signed Up Successfully!',
      text: 'Welcome aboard!',
    });
  } catch (error: any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response?.data?.message || 'Something went wrong!',
    });
  }
};

    const handleLogin = async (event:any) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      
        try {
          const response = await axios.post('https://gardening-platform-backend.vercel.app/api/users/login', {
            email,
            password,
          });
      
          const { user, token } = response.data.data;
      
          saveUserData(user, token); // Save user and token
          router.push('/');
          Swal.fire({
            icon: 'success',
            title: 'Logged In Successfully!',
            text: 'Welcome back!',
          });
        } catch (error: any) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response?.data?.message || 'Invalid credentials!',
          });
        }
      };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-stone-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="flex justify-between items-center mb-6">
                    <div className="mx-2 flex px-2">
                        <Image alt="logo" src={logo} width={'75'} height={'75'} />
                    </div>
                    <div className="flex items-center">
                        <span className={`mr-2 ${isSignup ? 'text-blue-500' : 'text-blue-500'} font-bold`}>Login</span>
                        <label className="flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                className={`toggle toggle-lg border-2 rounded-full transition-all duration-300 ${isSignup ? 'bg-green-500' : 'bg-blue-500'}`} 
                                checked={isSignup} 
                                onChange={toggleAuthMode} 
                            />
                        </label>
                        <span className={`ml-2 ${isSignup ? 'text-green-500' : 'text-green-500'} font-bold`}>Sign Up</span>
                    </div>
                </div>

                {isSignup ? (
                    <form onSubmit={handleSignup}>
                        <h1 className="mt-2 text-green-500">Already have an account? <span className="text-blue-500">Please log in</span></h1>
                        <div className="mb-4 mt-2">
                            <label className="block text-sm font-medium text-blue-500">Name</label>
                            <input name="name" type="text" className="input input-bordered w-full text-green-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-blue-500">PhotoUrl</label>
                            <input name="photoUrl" type="text" className="input input-bordered w-full text-green-500" />
                        </div>
                        <div className="mb-4 ">
                            <label className="block text-sm font-medium text-blue-500">Email</label>
                            <input name="email" type="email" className="input input-bordered w-full text-green-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-blue-500">Address</label>
                            <input name="address" type="text" className="input input-bordered w-full text-green-500" />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-blue-500">Password</label>
                            <input name="password" type="password" className="input input-bordered w-full text-green-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-blue-500">Phone</label>
                            <input name="phone" type="text" className="input input-bordered w-full text-green-500" />
                        </div>
                        <button type="submit" className="btn btn-success w-full">Sign Up</button>
                    </form>
                ) : (
                    <form onSubmit={handleLogin}>
                        <h1 className="mt-2 text-blue-500">New here? <span className='text-green-500'>Please Sign Up</span> </h1>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-green-500">Email</label>
                            <input name="email" type="email" className="input input-bordered w-full text-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-green-500">Password</label>
                            <input name="password" type="password" className="input input-bordered w-full text-blue-500" />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;
