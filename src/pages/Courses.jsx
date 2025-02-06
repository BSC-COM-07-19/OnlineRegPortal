import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Courses = () => {
  const { user } = useAuth(); // Check if user is logged in
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!user) {
      alert('You must be logged in to view your registered courses!');
      navigate('/login'); // Redirect to login if not authenticated
      return;
    }

    // Simulating fetching registered courses (Replace with actual API call)
    const registeredCourses = JSON.parse(localStorage.getItem('registeredCourses')) || [];
    setCourses(registeredCourses);
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Your Registered Courses</h1>
        {courses.length === 0 ? (
          <p className="text-gray-700">You have not registered for any courses yet.</p>
        ) : (
          <ul className="bg-white p-6 rounded-lg shadow-lg">
            {courses.map((course, index) => (
              <li key={index} className="border-b py-2 text-gray-700">
                {course.courseName} ({course.courseCode})
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
