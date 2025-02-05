import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-8">Welcome to Army Secondary School Portal</h1>
        <p className="text-center mt-4 text-gray-700">
          Manage your academic records, check results, and stay updated with important announcements.
        </p>
        <div className="flex justify-center mt-8">
          <a href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;