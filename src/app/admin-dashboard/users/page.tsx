"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// Define a User type
interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true); // To handle loading state

  // Fetch users from backend API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await axios.get(
          "https://gardening-platform-backend.vercel.app/api/users"
        );
        console.log(data.data); // Log response to check structure
        // If response data is an array, set it to users state
        if (Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          console.error("Unexpected response format:", data?.data);
          Swal.fire("Error", "Invalid data format received", "error");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        Swal.fire("Error", "Failed to fetch users", "error");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchUsers();
  }, []);

  // Delete user
  const deleteUser = async (userId: string) => {
    try {
      await axios.delete(
        `https://gardening-platform-backend.vercel.app/api/users/${userId}`
      );
      Swal.fire("Deleted", "User has been deleted", "success");
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
      Swal.fire("Error", "Failed to delete user", "error");
    }
  };

  // Update user role to admin
  const updateUserRole = async (userId: string) => {
    try {
      await axios.put(
        `https://gardening-platform-backend.vercel.app/api/users/${userId}`,
        { role: "admin" } // Update the role to "admin"
      );
      Swal.fire("Updated", "User role updated to admin", "success");
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: "admin" } : user
        )
      );
    } catch (error) {
      console.error("Error updating user role:", error);
      Swal.fire("Error", "Failed to update user role", "error");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4 space-x-2">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                    {user.role !== "admin" && (
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                        onClick={() => updateUserRole(user._id)}
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
