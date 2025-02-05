import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-around mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 ${isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-lg`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 ${!isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-lg`}
            >
              Signup
            </button>
          </div>
          {isLogin ? (
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full p-2 border rounded-lg" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                Login
              </button>
            </form>
          ) : (
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full p-2 border rounded-lg" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
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