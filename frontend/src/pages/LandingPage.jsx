import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex justify-between items-center px-16 py-4 bg-white shadow-sm">
        <div className="text-2xl font-bold">Public Transport Navigator</div>
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-gray-900">Login</Link>
          <Link to="/register" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Register</Link>
        </div>
      </nav>

      <div className="h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center text-white text-center">
        <div className="max-w-4xl px-8">
          <h1 className="text-6xl font-bold mb-4">Go Anywhere, Anytime</h1>
          <p className="text-xl mb-8">Your reliable transportation solution</p>
          <div className="flex justify-center space-x-4">
            <Link to="/register" className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100">
              Get Started
            </Link>
            <Link to="/about" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16 py-20 bg-white">
        <div className="text-center p-8">
          <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
          <p className="text-gray-600">Book your ride with just a few clicks</p>
        </div>
        <div className="text-center p-8">
          <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
          <p className="text-gray-600">Verified drivers and secure payments</p>
        </div>
        <div className="text-center p-8">
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Always here to help you</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;