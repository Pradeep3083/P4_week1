import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Hero"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Discover Your Style
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto px-4">
            Explore our latest collection of trendy and comfortable clothing for everyone
          </p>
          <Link 
            to="/shop" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;