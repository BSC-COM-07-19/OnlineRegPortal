import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <div className="text-center mt-12">
          <h1 className="text-4xl font-bold text-[#4B5320]">
            Welcome to Army Secondary School Portal
          </h1>
          <p className="mt-4 text-[#333333]">
            Manage your academic records, check results, and stay updated with important announcements.
          </p>
          <div className="mt-8">
            <Link
              to="/login"
              className="bg-[#4B5320] text-white px-6 py-2 rounded-lg hover:bg-[#003366] transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;