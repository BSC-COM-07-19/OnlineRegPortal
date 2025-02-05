import React from "react";

function Header() {
  const headerStyle = {
    backgroundColor: "#4CAF50", // Green background
    color: "white", // White text
    padding: "15px 20px", // Padding
    textAlign: "center", // Center alignment
    fontFamily: "Arial, sans-serif", // Font
    fontSize: "1.5rem", // Font size
  };

  return (
    <header style={headerStyle}>
      <h1>Army Secondary School Portal</h1>
    </header>
  );
}

export default Header;
