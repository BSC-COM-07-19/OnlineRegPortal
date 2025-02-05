import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Registration = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Course Registration</h1>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Course Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Course Code</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;