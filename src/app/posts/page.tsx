'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

interface Post {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  excerpt: string; // Make sure this exists in your response data structure
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Strong typing for posts
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]); // Strong typing for filteredPosts

  // Fetch posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://gardening-platform-backend.vercel.app/api/posts');
        
        if (Array.isArray(response.data)) {
          setPosts(response.data);
          setFilteredPosts(response.data); // Initially display all posts
        } else {
          console.error('Expected an array, but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter posts based on search query
    if (query) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query)
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts); // Show all posts when search query is empty
    }
  };

  return (
    <div className="container mx-auto p-4">
      <NavBar/>
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search posts..."
          className="input input-bordered w-full"
        />
      </div>

      {/* Display posts */}
      {filteredPosts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post: Post) => (
            <div key={post._id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
              <Link href={`/posts/${post._id}`}>
                <a className="mt-2 text-blue-600 hover:underline">See Details</a>
              </Link>
            </div>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Page;
