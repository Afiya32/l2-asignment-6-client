'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '@/app/hooks/useAuth';

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditorRaper = () => {
  const { user } = useAuth(); // Get user info from the custom hook
  const [title, setTitle] = useState(''); // Title state
  const [content, setContent] = useState(''); // Content for the post
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes for title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handle form submission for creating a new post
  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Title and content are required!',
      });
      return;
    }

    if (!user?._id) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'User not found. Please log in.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const postData = {
        title,
        content,
        userId: user._id, // Assuming the user has an _id field
      };

      // Send a POST request to the backend
      const response = await axios.post(
        'https://gardening-platform-backend.vercel.app/api/posts',
        postData
      );

      if (response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Post Created!',
          text: 'Your post has been successfully created.',
        });
        // Optionally redirect or clear form
        setTitle('');
        setContent('');
      }
    } catch (error: any) {
      console.error('Error creating post:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error?.response?.data?.message || 'Something went wrong while creating your post.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
        <h1 className="text-2xl font-bold mb-4">Create New Post</h1>

        <form onSubmit={handlePostSubmit}>
          {/* Post Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Post Title</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="input input-bordered w-full"
              placeholder="Enter post title"
            />
          </div>

          {/* Rich Text Editor for Post Content */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Post Content</label>
            <ReactQuill
              value={content}
              onChange={setContent}
              placeholder="Write your post here..."
              className="h-64"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn btn-primary w-full ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Create Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TextEditorRaper;
