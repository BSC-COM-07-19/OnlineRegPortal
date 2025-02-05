import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Results for Term 1 have been published.' },
    { id: 2, message: 'Registration for Term 2 is now open.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {notifications.map((notification) => (
            <div key={notification.id} className="border-b py-2">
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notifications;