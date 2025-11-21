// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage'; // <-- 1. Ensure this is imported correctly
import MenuPage from './MenuPage';
import CartPage from './CartPage';

function App() {
  return (
    <Routes>
      
      {/* 🟢 THIS IS THE FIX: Home Page must be mapped to the root path ("/") */}
      <Route path="/" element={<HomePage />} /> 

      {/* Login and Signup must be mapped to their specific paths */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      
      {/* Core App Pages */}
      <Route path="/menu" element={<MenuPage />} /> 
      <Route path="/cart" element={<CartPage />} />
      
      {/* Fallback route */}
      <Route path="*" element={<h1 className="text-center text-3xl mt-20 text-red-700">404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;