import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Army SS Portal</Link>
        <div className="space-x-4">
          <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;