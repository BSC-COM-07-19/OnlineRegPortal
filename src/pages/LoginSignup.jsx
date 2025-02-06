import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, name: 'John Doe' };
    login(userData);
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-around mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 ${
                isLogin ? 'bg-[#4B5320] text-white' : 'bg-gray-200'
              } rounded-lg transition duration-300`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 ${
                !isLogin ? 'bg-[#4B5320] text-white' : 'bg-gray-200'
              } rounded-lg transition duration-300`}
            >
              Signup
            </button>
          </div>
          {isLogin ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[#333333]">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#333333]">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#4B5320] text-white p-2 rounded-lg hover:bg-[#003366] transition duration-300"
              >
                Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[#333333]">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#333333]">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#333333]">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#4B5320] text-white p-2 rounded-lg hover:bg-[#003366] transition duration-300"
              >
                Signup
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginSignup;