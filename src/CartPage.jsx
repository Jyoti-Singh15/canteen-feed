// src/CartPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder cart data for demonstration
const cartItems = [
    { id: 1, name: "Spicy Campus Burger", price: 6.99, quantity: 1 },
    { id: 3, name: "Loaded Fries", price: 4.00, quantity: 2 },
    { id: 5, name: "Chocolate Lava Cake", price: 4.99, quantity: 1 },
];

const TAX_RATE = 0.08; 

const CartPage = () => {
    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    return (
        <div className="flex flex-col min-h-screen bg-red-50">
            
            {/* Header for Mobile View */}
            <header className="md:hidden sticky top-0 bg-white border-b-4 border-red-900 p-4 z-20 shadow-lg">
                <h1 className="text-3xl font-extrabold text-red-700 tracking-wider text-center">
                    Your Cart
                </h1>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 p-4 md:p-8 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* 1. Cart Items List (Column 1 & 2 on Desktop) */}
                <section className="lg:col-span-2 space-y-4">
                    <h2 className="section-title">Items in Your Cart ({cartItems.length})</h2>
                    
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}

                    {cartItems.length === 0 && (
                         <div className="section-neobrutal bg-white text-center text-gray-500">
                             Your cart is empty! <Link to="/menu" className="text-red-700 font-bold">Start ordering.</Link>
                         </div>
                    )}
                    
                    <Link to="/menu" className="nav-button-secondary inline-block mt-4 w-auto">
                        ⬅️ Continue Shopping
                    </Link>

                </section>

                {/* 2. Order Summary (Column 3 on Desktop) */}
                <section className="section-neobrutal bg-white h-fit">
                    <h2 className="section-title">Order Summary</h2>
                    
                    <div className="space-y-3 text-lg mb-6">
                        <SummaryRow label="Subtotal" value={subtotal} />
                        <SummaryRow label={`Tax (${(TAX_RATE * 100).toFixed(0)}%)`} value={tax} />
                        <div className="border-t-4 border-red-900 pt-4 mt-4">
                            <SummaryRow label="Grand Total" value={total} isTotal={true} />
                        </div>
                    </div>

                    {/* Checkout Button - Strongest Neobrutal CTA */}
                    <button 
                        className="action-button-neobrutal w-full text-center text-xl"
                        disabled={cartItems.length === 0}
                    >
                        Proceed to Checkout
                    </button>
                </section>

            </main>
            
            {/* Bottom Mobile Navigation (Same as MenuPage) */}
            <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t-4 border-red-900 shadow-inner flex justify-around items-center z-10 md:hidden">
                <Link to="/" className="mobile-nav-item">🏠 Home</Link>
                <Link to="/menu" className="mobile-nav-item">🍲 Menu</Link> 
                <Link to="/cart" className="mobile-nav-item border-b-4 border-red-700 text-red-900">🛒 Cart</Link> {/* Highlight current page */}
                <Link to="/login" className="mobile-nav-item">👤 Login</Link>
            </nav>
            
        </div>
    );
};

// --- Helper Components ---

const CartItem = ({ item }) => (
    <div className="bg-red-50 p-4 flex items-center border-4 border-red-900 shadow-xl shadow-red-900/30">
        
        {/* Item Info */}
        <div className="flex-1">
            <h4 className="font-extrabold text-xl text-red-800">{item.name}</h4>
            <span className="text-gray-600">${item.price.toFixed(2)} each</span>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-2 border-2 border-red-900 p-1 bg-white mx-4">
            <button className="text-red-700 text-2xl px-2 font-bold hover:bg-red-100">-</button>
            <span className="text-xl font-bold text-red-900 w-6 text-center">{item.quantity}</span>
            <button className="text-red-700 text-2xl px-2 font-bold hover:bg-red-100">+</button>
        </div>

        {/* Total Price */}
        <span className="text-2xl font-black text-red-900 w-20 text-right">
            ${(item.price * item.quantity).toFixed(2)}
        </span>
    </div>
);

const SummaryRow = ({ label, value, isTotal = false }) => (
    <div className={`flex justify-between ${isTotal ? 'text-2xl font-black text-red-900' : 'text-gray-700'}`}>
        <span>{label}</span>
        <span>${value.toFixed(2)}</span>
    </div>
);

export default CartPage;