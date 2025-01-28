// src/services/AuthService.ts
export interface User {
    username: string;
    role: string;
  }
  
  // Mocked login service for authentication
  export const loginService = (username: string, password: string): User | null => {
    if (username === "admin" && password === "admin") {
      return { username, role: "admin" };
    } else if (username === "user" && password === "user") {
      return { username, role: "user" };
    }
    return null; // Invalid credentials
  };
  
  // Logout service
  export const logoutService = () => {
    localStorage.removeItem("user"); // Clear user data from storage
  };
  
  // Utility to fetch the user from storage
  export const getStoredUser = (): User | null => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };
  