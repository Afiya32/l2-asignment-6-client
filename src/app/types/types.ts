export interface User {
  _id: string;              // Unique identifier for the user
  name: string;            // User's name
  email: string;           // User's email address
  password: string;
  address?:string;
  phone?:string;        // Hashed password (consider whether to expose this)
  photoUrl?: string;       // Optional URL for the user's profile picture
  following: string[];     // Array of user IDs that this user follows
  followers: string[];     // Array of user IDs that follow this user
  verified: boolean;       // Boolean indicating if the user is verified
  role: 'admin' | 'user';  // User's role, can be either 'admin' or 'user'
  createdAt: string;       // ISO date string of when the user was created
  updatedAt: string;       // ISO date string of when the user was last updated
  __v: number;  
  token?: string;  
  }