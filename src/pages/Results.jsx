import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Results = () => {
  const results = [
    { id: 1, course: 'Mathematics', grade: 'A' },
    { id: 2, course: 'English', grade: 'B' },
    { id: 3, course: 'Science', grade: 'A-' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Results</h1>
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">Course</th>
              <th className="p-3">Grade</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="border-b">
                <td className="p-3">{result.course}</td>
                <td className="p-3">{result.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default Results;