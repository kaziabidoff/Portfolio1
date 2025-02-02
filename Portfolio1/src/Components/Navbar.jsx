import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar({ colorShift }) {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    setTimeout(() => setFlicker(true), 2000); // Start flickering effect
  }, []);

  return (
    <nav className={`navbar ${colorShift ? "color-shift" : ""}`}>
      <h2 className={`welcome-text ${flicker ? "flicker" : ""}`}>.</h2>
    </nav>
  );
}

export default Navbar;
