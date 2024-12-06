import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#4CAF50", // Green background
    color: "white", // White text
    textAlign: "center", // Center alignment
    padding: "10px",
    position: "fixed", // Sticks to the bottom
    bottom: "0",
    width: "100%",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Army Secondary School. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
