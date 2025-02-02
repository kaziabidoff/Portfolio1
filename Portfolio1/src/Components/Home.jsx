import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";

function Home() {
  const [showMainText, setShowMainText] = useState(false);
  const [showSubText, setShowSubText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMainText(true), 500);
    setTimeout(() => setShowSubText(true), 1200);
    setTimeout(() => setShowArrow(true), 2000);
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <h1 className={`main-text ${showMainText ? "visible" : ""}`}>
          Welcome to My Portfolio
        </h1>
        {showSubText && (
          <h2 className={`sub-text ${showSubText ? "visible" : ""}`}>
            Explore my work below
          </h2>
        )}
        {showArrow && (
          <div className="scroll-down">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span className="scroll-text">Scroll Down</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
