import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Registration = () => {
  const { user } = useAuth(); // Check if user is logged in
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!user) {
      alert('You must be logged in to register for a course!');
      navigate('/login'); // Redirect to login if not authenticated
      return;
    }
    const newCourse = { courseName, courseCode };
    // Here, you would send the course data to the backend
    console.log('Registering course:', { courseName, courseCode });

  // Save to localStorage (Replace this with an API call if using a backend)
  const registeredCourses = JSON.parse(localStorage.getItem('registeredCourses')) || [];
  registeredCourses.push(newCourse);
  localStorage.setItem('registeredCourses', JSON.stringify(registeredCourses));


    alert('Course registered successfully!');
    navigate('/courses'); // Redirect to dashboard after registration
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Course Registration</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Course Name</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Course Code</label>
            <input
              type="text"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#4B5320] text-white p-2 rounded-lg hover:bg-[#37421B] transition">
            Register
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
