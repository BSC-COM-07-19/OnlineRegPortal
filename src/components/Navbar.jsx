import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function from AuthContext
  const navigate = useNavigate(); // For redirection

  const handleLogout = () => {
    logout(); // Clear user data
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Army SS Portal</Link>
        <div className="space-x-4">
          {user ? (
            <button onClick={handleLogout} className="text-white hover:text-gray-200">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
              <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;