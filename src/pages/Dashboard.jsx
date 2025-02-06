import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const { user } = useAuth(); // Get user from AuthContext

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        {user && <p>Welcome, {user.name}!</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Registration</h2>
            <p>Register for courses here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Results</h2>
            <p>Check your results here.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;