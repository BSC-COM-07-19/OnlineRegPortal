import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [results, setResults] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch student details
    axios.get("/api/student/profile").then((response) => {
      setStudent(response.data);
    });

    // Fetch academic records
    axios.get("/api/student/results").then((response) => {
      setResults(response.data);
    });

    // Fetch notifications
    axios.get("/api/student/notifications").then((response) => {
      setNotifications(response.data);
    });
  }, []);

  if (!student) {
    return <div>Load..</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4 rounded-md">
        <h1 className="text-xl font-bold">Student Profile</h1>
      </header>

      <section className="bg-white shadow-md rounded-md p-4 mt-4">
        <h2 className="text-lg font-bold">Personal Information</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Registration Number:</strong> {student.registrationNumber}</p>
        <p><strong>Class:</strong> {student.class}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
      </section>

      <section className="bg-white shadow-md rounded-md p-4 mt-4">
        <h2 className="text-lg font-bold">Academic Records</h2>
        <ul>
          {results.map((result, index) => (
            <li key={index} className="border-b py-2">
              <strong>Subject:</strong> {result.subject} | 
              <strong> Grade:</strong> {result.grade}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-md p-4 mt-4">
        <h2 className="text-lg font-bold">Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className="border-b py-2">
              {notification.message}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudentProfile;
