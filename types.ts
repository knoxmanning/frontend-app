// types.ts

// Define the interface for the user
interface User {
  id: number;
  username: string;
  email: string;
  profilePicture: string;
}

// Define the interface for the post
interface Post {
  id: number;
  userId: number;
  title: string;
  content: string;
  createdAt: Date;
}

// Define the interface for the comment
interface Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
  createdAt: Date;
}

// Define the interface for the like
interface Like {
  id: number;
  postId: number;
  userId: number;
}

// Define the interface for the notification
interface Notification {
  id: number;
  type: 'like' | 'comment';
  postId: number;
  userId: number;
  createdAt: Date;
}

// Define the type for the API response
type ApiResponse<T> = {
  status: number;
  data: T;
  error?: string;
};