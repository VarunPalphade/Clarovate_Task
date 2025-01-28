// src/context/AuthProvider.tsx
import React, { createContext, useState, useEffect } from "react";
import { loginService, logoutService, getStoredUser, User } from "../services/AuthService";

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from storage on app initialization
  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login functionw
  const login = (username: string, password: string): boolean => {
    const authenticatedUser = loginService(username, password);
    if (authenticatedUser) {
      setUser(authenticatedUser);
      localStorage.setItem("user", JSON.stringify(authenticatedUser)); // Persist user to storage
      return true;
    }
    return false; // Invalid credentials
  };

  // Logout function
  const logout = () => {
    setUser(null);
    logoutService(); // Clear storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
