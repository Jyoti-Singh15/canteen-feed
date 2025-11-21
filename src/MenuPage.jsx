// src/MenuPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder food data for demonstration
const menuItems = [
  { id: 1, name: "Spicy Campus Burger", price: 6.99, category: "Popular Items", img: "/assets/burger.jpg" },
  { id: 2, name: "Fresh Caesar Salad", price: 5.50, category: "Popular Items", img: "/assets/salad.jpg" },
  { id: 3, name: "Loaded Fries", price: 4.00, category: "Quick Eats", img: "/assets/fries.jpg" },
  { id: 4, name: "Vegan Falafel Wrap", price: 7.50, category: "Veggies", img: "/assets/wrap.jpg" },
  { id: 5, name: "Chocolate Lava Cake", price: 4.99, category: "Desserts", img: "/assets/dessert.jpg" },
];

// Helper function to render a food card
const FoodCard = ({ item }) => (
    <div className="bg-white p-4 border-4 border-red-900 shadow-lg shadow-red-900/50 transition transform hover:scale-[1.02] hover:shadow-xl">
        <div 
            className="w-full h-32 bg-gray-200 mb-3 border-2 border-red-900 bg-cover bg-center" 
            style={{ backgroundImage: `url(${item.img})` }}
        >
            {/*  - Placeholder */}
        </div>
        <h4 className="font-extrabold text-lg text-red-700 uppercase">{item.name}</h4>
        <p className="text-gray-600 text-sm mb-3">Fresh and ready to go!</p>
        <div className="flex justify-between items-center border-t-2 border-red-200 pt-2">
            <span className="text-xl font-black text-red-900">${item.price.toFixed(2)}</span>
            <button className="py-1 px-3 bg-red-600 text-white font-bold text-sm 
                               border-2 border-red-900 shadow-md shadow-red-900/50 
                               hover:bg-red-800 transition">
                + Add
            </button>
        </div>
    </div>
);

// Main Menu Component
const MenuPage = () => {
    // Grouping items by category
    const groupedItems = menuItems.reduce((acc, item) => {
        const categoryKey = item.category.replace(/\s/g, ''); // Use key without spaces
        acc[categoryKey] = acc[categoryKey] || [];
        acc[categoryKey].push(item);
        return acc;
    }, {});

    const renderSection = (title, key) => (
        <section key={key} className="section-neobrutal bg-white mb-8">
            <h3 className="section-title">{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedItems[key]?.map(item => (
                    <FoodCard key={item.id} item={item} />
                ))}
            </div>
            {groupedItems[key] && groupedItems[key].length === 0 && (
                <p className="text-gray-500">No items available in this category.</p>
            )}
        </section>
    );

    return (
        // Wrapper for full screen, using mobile-first scrolling layout
        <div className="flex flex-col min-h-screen bg-red-50">
            
            {/* Header for Mobile View (Replaces left Nav logo area) */}
            <header className="md:hidden sticky top-0 bg-white border-b-4 border-red-900 p-4 z-20 shadow-lg">
                <h1 className="text-3xl font-extrabold text-red-700 tracking-wider text-center">
                    CampusFeed Menu
                </h1>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 p-4 md:p-8 pb-20"> 
                {/* Ensure padding bottom for mobile fixed nav */}

                <h2 className="text-4xl font-black text-red-900 mb-8 border-b-4 border-red-900 pb-2">
                    What's Cooking?
                </h2>
                
                {/* Render Sections */}
                {renderSection("🔥 Popular Items", "PopularItems")}
                {renderSection("🍔 All Categories", "Veggies")}
                {renderSection("⚡ Quick Eats", "QuickEats")}
                {renderSection("🍰 Desserts & Drinks", "Desserts")}
            </main>

            {/* Bottom Mobile Navigation (Same as HomePage) */}
            <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t-4 border-red-900 shadow-inner flex justify-around items-center z-10 md:hidden">
                <Link to="/" className="mobile-nav-item">🏠 Home</Link>
                <Link to="/menu" className="mobile-nav-item border-b-4 border-red-700 text-red-900">🍲 Menu</Link> {/* Highlight current page */}
                <Link to="/login" className="mobile-nav-item">👤 Log In</Link>
                <button className="mobile-nav-item text-green-700 font-bold">🛒 Cart (3)</button>
            </nav>
            
        </div>
    );
};

export default MenuPage;