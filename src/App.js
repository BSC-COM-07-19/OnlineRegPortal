import React from "react";
import Header from "./components/Header";
import Homepage from "./components/HomePage";
import Footer from "./components/Footer";
import StudentProfile from "./components/StudentProfile";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
      <StudentProfile />
    </div>
  );
}

export default App;
