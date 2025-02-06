import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-[#4B5320] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Army SS Portal
        </Link>
        <div className="space-x-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="text-white hover:text-[#C3B091] transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-[#C3B091] transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-[#C3B091] transition duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;