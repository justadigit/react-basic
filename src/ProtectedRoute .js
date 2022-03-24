import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/blogs-site-login" />;
  }
  return children;
};
