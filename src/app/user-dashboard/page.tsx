'use client'
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import { User } from '../types/types'; // Correctly import the User type

const Page = () => {
  const { user, saveUserData } = useAuth(); // Get user info from the custom hook
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [updatedUser, setUpdatedUser] = useState<User | null>(user); // Use imported User type

  // Handle opening and closing the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updatedUser) {
      setUpdatedUser({
        ...updatedUser,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Handle form submission for updating the user profile
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (updatedUser) {
      try {
        // Send updated user info to backend
        const response = await axios.put(`https://your-backend-url.com/api/users/${updatedUser._id}`, updatedUser);

        // Log response to verify the update
        console.log('Update Response:', response.data);

        // Update user info in local storage if successful
        if (response.data.user) {
          saveUserData(response.data.user); // Save updated user info in local storage
          Swal.fire({
            icon: 'success',
            title: 'Profile Updated',
            text: 'Your profile has been updated successfully!',
          });
          toggleModal(); // Close the modal
        } else {
          console.error('Update failed');
        }
      } catch (error) {
        console.error('Update error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'Something went wrong while updating your profile!',
        });
      }
    }
  };

  // Ensure user info is loaded correctly
  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <div className="mb-6">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Address:</strong> {user?.address ?? 'Not Provided'}</p>
          <p><strong>Phone:</strong> {user?.phone}</p>
          <p><strong>Photo:</strong> <img src={user?.photoUrl} alt="User Photo" className="w-16 h-16 rounded-full" /></p>
        </div>

        <button className="btn btn-primary" onClick={toggleModal}>Edit Profile</button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-1/2 relative">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
                onClick={toggleModal}
              >
                <span className="text-2xl">&times;</span>
              </button>

              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    name="name"
                    type="text"
                    value={updatedUser?.name || ''}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={updatedUser?.email || ''}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Address</label>
                  <input
                    name="address"
                    type="text"
                    value={updatedUser?.address || ''}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    name="phone"
                    type="text"
                    value={updatedUser?.phone || ''}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Photo URL</label>
                  <input
                    name="photoUrl"
                    type="text"
                    value={updatedUser?.photoUrl || ''}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>

                <button type="submit" className="btn btn-success w-full">Save Changes</button>
              </form>

              {/* Cancel Button to Close Modal */}
              <button
                className="btn btn-danger mt-4 w-full"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
