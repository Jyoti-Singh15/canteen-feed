// src/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder image paths - ensure these files exist in your 'public/assets' folder
const FOOD_IMAGE_1 = '/assets/food1.jpg'; // Example: Sandwich or Pizza
const FOOD_IMAGE_2 = '/assets/food2.jpg'; // Example: Burger or Fries
const FOOD_IMAGE_3 = '/assets/food3.jpg'; // Example: Dessert or Coffee

const HomePage = () => {
  return (
    // Main Container: Screen height, flex layout for side nav and content
    <div className="flex min-h-screen bg-red-50"> 
      
      {/* 1. Left Sidebar Navigation (Desktop/Tablet) */}
      <nav className="hidden md:flex flex-col w-64 bg-white border-r-4 border-red-900 shadow-xl shadow-red-900/50">
        
        {/* Logo and Site Name */}
        <div className="flex items-center justify-center p-6 border-b-4 border-red-900 h-20">
          <span className="text-3xl font-extrabold text-red-700 tracking-wider">
            CampusFeed
          </span>
        </div>

        {/* Main Navigation Links */}
        <div className="flex-grow pt-8">
          {/* Active Home Link */}
          <Link to="/" className="nav-item border-l-4 border-red-700 bg-red-50 text-red-700">🏠 Home</Link>
          <Link to="/menu" className="nav-item">🍲 Full Menu</Link>
          <Link to="/cart" className="nav-item">🛒 My Cart</Link>
          <Link to="/profile" className="nav-item">👤 Profile</Link>
        </div>

        {/* Auth Buttons (Bottom of Nav) */}
        <div className="p-4 border-t-4 border-red-900">
          <Link to="/login" className="nav-button-secondary">Log In</Link>
          <Link to="/signup" className="nav-button-primary mt-2">Sign Up</Link>
        </div>
      </nav>

      {/* 2. Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        
        {/* 2a. Hero Section: Full width, Neobrutalist container */}
        <section className="relative h-96 md:h-[400px] bg-white border-b-4 border-red-900 shadow-2xl shadow-red-900/50 mb-12">
            
            {/* Background Image Grid */}
            <div className="absolute inset-0 grid grid-cols-3 opacity-60">
                <div className="bg-cover bg-center" style={{ backgroundImage: `url(${FOOD_IMAGE_1})` }}></div>
                <div className="bg-cover bg-center" style={{ backgroundImage: `url(${FOOD_IMAGE_2})` }}></div>
                <div className="bg-cover bg-center" style={{ backgroundImage: `url(${FOOD_IMAGE_3})` }}></div>
            </div>

            {/* Overlay and Call to Action */}
            <div className="relative flex flex-col items-center justify-center h-full text-center p-4">
                <h1 className="text-4xl md:text-6xl font-black text-red-900 uppercase mb-6 bg-white/80 p-2 border-4 border-red-900 shadow-xl shadow-red-700/50">
                    Campus Eats, Delivered.
                </h1>
                
                {/* Eat Now Button - Links to Menu Page */}
                <Link to="/menu" className="action-button-neobrutal">
                    👉 EAT NOW!
                </Link>
            </div>
        </section>

        {/* 2b. Content Sections */}
        <div className="p-4 md:p-8 space-y-12">
            
            {/* Full Menu Section */}
            <section className="section-neobrutal bg-white">
                <h3 className="section-title">🍜 Menu Highlights</h3>
                <p className="text-gray-600">See what's hot and ready to order today.</p>
                <div className="flex justify-center mt-4">
                    <Link to="/menu" className="nav-button-primary">View Full Menu</Link>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section-neobrutal bg-red-100">
                <h3 className="section-title text-red-800">🍔 Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <CategoryCard name="Burgers" />
                    <CategoryCard name="Veggies" />
                    <CategoryCard name="Desserts" />
                    <CategoryCard name="Drinks" />
                </div>
            </section>
            
            {/* Quick Eats Section */}
            <section className="section-neobrutal bg-white">
                <h3 className="section-title">⚡ Quick Eats</h3>
                <p className="text-gray-600">Need something fast? Grab a quick snack!</p>
                <div className="flex justify-center mt-4">
                    <Link to="/menu" className="nav-button-secondary">Browse Quick Snacks</Link>
                </div>
            </section>

        </div>
      </main>
      
      {/* 3. Bottom Mobile Navigation (Small Screens) */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t-4 border-red-900 shadow-inner md:hidden flex justify-around items-center z-10">
        <Link to="/" className="mobile-nav-item border-b-4 border-red-700 text-red-900">🏠 Home</Link>
        <Link to="/menu" className="mobile-nav-item">🍲 Menu</Link>
        <Link to="/cart" className="mobile-nav-item">🛒 Cart</Link>
        <Link to="/login" className="mobile-nav-item">👤 Login</Link>
      </nav>
      
    </div>
  );
};

// --- Helper Components (Kept simple for clarity) ---

const CategoryCard = ({ name }) => (
    <div className="p-4 text-center bg-white border-2 border-red-900 shadow-md shadow-red-500/50 rounded-lg hover:bg-red-50 transition transform hover:scale-[1.02]">
        <p className="font-semibold text-red-700">{name}</p>
    </div>
);

export default HomePage;