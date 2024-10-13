'use client'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
const Page = () => {
    const router = useRouter();
    const { id } = router.query; // Get the post id from the URL
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      if (id) {
        const fetchPost = async () => {
          try {
            const response = await axios.get(`https://gardening-platform-backend.vercel.app/api/posts/${id}`);
            setPost(response.data);
            setLoading(false);
          } catch (err) {
            console.error('Error fetching post:', err);
            setError('Failed to load the post.');
            setLoading(false);
          }
        };
  
        fetchPost();
      }
    }, [id]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div className="text-red-500">{error}</div>;
    }
  
    return (
      <div className="container mx-auto p-4">
        <NavBar/>
        {post ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-600 mb-4">Published on: {new Date(post.createdAt).toLocaleDateString()}</p>
            <div className="mb-6">
              <p className="text-lg">{post.content}</p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">Author:</h3>
              <p>{post.author?.name}</p>
            </div>
  
            {/* Optionally, display more info or a button to navigate back */}
            <div className="mt-6">
              <button
                onClick={() => router.back()}
                className="btn btn-primary"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <p>Post not found.</p>
        )}
        <Footer/>
      </div>
    );
  };
export default Page;