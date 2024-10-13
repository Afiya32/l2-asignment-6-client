'use client'
import React from 'react';

import Image from 'next/image';
import logo from "@/assets/logo.png"
import { useAuth } from '../hooks/useAuth';
const page = () => {
  const {user}= useAuth()
  return (
   
       <div className="p-6 text-center font-bold text-2xl">
        <h1 className="text-3xl font-bold text-center">Welcome to Admin Dashboard</h1>
        <div className='flex justify-center items-start'>
    <div>
      <div className='mt-2'>
      <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
  <Image src={user?.photoUrl ||logo} width={10} height={10} alt='image'/>
  </div>
</div>
       
      </div>
    </div>

    </div>
    <h1>NAME:{user?.name}</h1>
    <h1>EMAIL:{user?.email}</h1>
    
      </div>
    
  );
};

export default page;