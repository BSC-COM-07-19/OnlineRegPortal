import React from "react";

function Homepage() {
  const mainStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    textAlign: "center",
  };

  const bannerStyle = {
    backgroundColor: "#f4f4f4", // Light gray background
    borderRadius: "8px", // Rounded corners
    padding: "30px 20px", // Padding
    margin: "20px auto", // Centered margin
    maxWidth: "800px", // Limit width
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect
  };

  return (
    <main style={mainStyle}>
      <div style={bannerStyle}>
        <h2>Welcome to Army Secondary School Portal</h2>
        <p>
          Access your academic records, register for courses, and check your examination
          results from the comfort of your home. Stay informed with important
          updates and deadlines.
        </p>
      </div>
    </main>
  );
}

export default Homepage;
