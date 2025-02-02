import React, { useEffect, useState } from "react";
import "../styles/About.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`about ${isVisible ? "visible" : ""}`} id="about">
      <div className="profile-frame">
        <div className="profile-container">
          <img src="/images/profile.jpg" alt="Profile" className="profile-pic" />
        </div>
      </div>
      <div className="about-content">
        <h2 className="glow-text">Kazi Abiduzzaman</h2>
        <p className="hover-effect">Aspiring Software Engineer with a passion for coding, problem-solving, and creating.</p>
        <p>I am a student specializing in Computer Science and Engineering
        (CSE). </p>
        <p>I consider myself a responsible and organized individual, and l am eager to embark on every opportuinity/work I get.</p>
        <div className="about-sections">
          <div className="about-card hover-effect">
            <h3>Skills & Technologies</h3>
            <p>Proficient in OOP, Data structure, Algorithums. Proficient in Coding Laguages and frameworks like Pyhton, JavaScript, React, CSS</p>
          </div>
          <div className="about-card hover-effect">
            <h3>Education</h3>
            <p>Pursuing a degree in Computer Science and Enginneering at BRAC University.</p>
          </div>
          <div className="about-card hover-effect">
            <h3>Projects</h3>
            <p>Developed various applications, including portfolio websites and e-commerce platforms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
